import crypto from "node:crypto";
import { supabaseAdmin } from "./supabaseAdmin";

export type WaitlistRow = {
  id: string;
  email: string;
  confirmed: boolean;
  confirmation_token: string | null;
  last_verification_sent_at: string | null;
};

export async function upsertSignup(email: string, ip: string, source?: string) {
  const token = crypto.randomBytes(24).toString("base64url");
  const { data, error } = await supabaseAdmin
    .from("waitlist_signups")
    .upsert(
      {
        email: email.toLowerCase(),
        source,
        confirmation_token: token,
        confirmed: false,
        metadata: { ip },
      },
      { onConflict: "email" },
    )
    .select("id, confirmation_token, confirmed")
    .single();

  if (error) throw error;
  return {
    id: data!.id,
    token: data!.confirmation_token ?? token,
    confirmed: data!.confirmed,
  };
}

export async function findByEmail(email: string) {
  const { data } = await supabaseAdmin
    .from("waitlist_signups")
    .select(
      "id, email, confirmed, confirmation_token, last_verification_sent_at",
    )
    .eq("email", email.toLowerCase())
    .single();
  return (data as WaitlistRow | null) ?? null;
}

export async function markVerificationSent(id: string, token?: string) {
  const update: Partial<WaitlistRow> = {
    last_verification_sent_at: new Date().toISOString(),
  };
  if (token) update.confirmation_token = token;

  const { error } = await supabaseAdmin
    .from("waitlist_signups")
    .update(update)
    .eq("id", id);

  if (error) throw error;
}

export async function confirmByToken(token: string) {
  const { data, error } = await supabaseAdmin
    .from("waitlist_signups")
    .update({
      confirmed: true,
      confirmed_at: new Date().toISOString(),
      confirmation_token: null,
    })
    .eq("confirmation_token", token)
    .is("confirmed", false)
    .select("id")
    .single();

  if (error) return { ok: false as const };
  return { ok: Boolean(data) };
}

export function cooldownRemaining(
  lastISO: string | null,
  cooldownSec: number,
): number {
  if (!lastISO) return 0;
  const last = new Date(lastISO).getTime();
  const diff = Math.floor((Date.now() - last) / 1000);
  return Math.max(0, cooldownSec - diff);
}

export type EmailTokenStatus = "ok" | "missing" | "invalid";
