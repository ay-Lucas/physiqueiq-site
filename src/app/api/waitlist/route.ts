import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyTurnstile } from "@/lib/turnstile";
import { markVerificationSent, upsertSignup } from "@/lib/waitlist";
import { sendVerificationEmail } from "@/lib/email";

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

  const isHuman = await verifyTurnstile(turnstileToken);
  if (!isHuman) {
    return NextResponse.json(
      { ok: false, message: "Invalid token" },
      { status: 400 },
    );
  }
  try {
    const { id, token, confirmed } = await upsertSignup(email, ip, source);

    if (confirmed) {
      return NextResponse.json(
        { ok: false, error: "You're already on the list." },
        { status: 409 },
      );
    }

    const send = await sendVerificationEmail({
      to: email,
      token,
      origin: req.headers.get("origin") || undefined,
    });

    if (!send.error) await markVerificationSent(id, token);

    return NextResponse.json({ ok: true, id });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 },
    );
  }
}
