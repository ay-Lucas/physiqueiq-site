import { NextResponse } from "next/server";
import { z } from "zod";
import {
  cooldownRemaining,
  findByEmail,
  markVerificationSent,
} from "@/lib/waitlist";
import { sendVerificationEmail } from "@/lib/email";
import crypto from "node:crypto";

const Body = z.object({ email: z.email().trim() });
const COOLDOWN = 10 * 60; // 10 min

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success)
    return NextResponse.json(
      { ok: false, error: "Invalid input." },
      { status: 400 },
    );

  const origin = req.headers.get("origin") || undefined;
  const email = parsed.data.email.toLowerCase();

  const row = await findByEmail(email);
  const NEUTRAL = NextResponse.json({
    ok: true,
    message: "If your address is on file, we’ve sent a new link.",
  });

  if (!row || row.confirmed) return NEUTRAL;

  const remaining = cooldownRemaining(row.last_verification_sent_at, COOLDOWN);
  if (remaining > 0) return NEUTRAL;

  const token =
    row.confirmation_token ?? crypto.randomBytes(24).toString("base64url");
  await markVerificationSent(
    row.id,
    row.confirmation_token ? undefined : token,
  );
  try {
    await sendVerificationEmail({ to: email, token, origin });
  } catch {}
  return NEUTRAL;
}
