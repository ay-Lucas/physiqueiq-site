import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

const Body = z.object({
  email: z.email().trim(),
  source: z.string().optional(),
  turnstileToken: z.string().min(1),
});

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim();

  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { email, source, turnstileToken } = parsed.data;
  const validationResponse = await validateTurnstileToken({
    token: turnstileToken,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    // Optional: Add an idempotency key to prevent token reuse
    idempotencyKey: v4(),
    sandbox:
      process.env.NODE_ENV === "development" &&
      process.env.NEXT_PUBLIC_TURNSTILE_BYPASS !== "true",
  });

  if (!validationResponse.success) {
    return NextResponse.json(
      { ok: false, message: "Invalid token" },
      { status: 400 },
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );

  const { data, error } = await supabase
    .from("waitlist_signups")
    .insert([{ email: email.toLowerCase(), source, metadata: { ip } }])
    .select("id")
    .single();

  if (error) {
    const duplicate = /duplicate|unique/i.test(error.message);
    return NextResponse.json(
      {
        ok: false,
        error: duplicate ? "You're already on the list." : "Server error.",
      },
      { status: duplicate ? 409 : 500 },
    );
  }

  return NextResponse.json({ ok: true, id: data.id });
}
