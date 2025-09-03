import { NextResponse } from "next/server";
import { confirmByToken, EmailTokenStatus } from "@/lib/waitlist";
import { ENV } from "@/lib/env";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  let emailTokenStatus: EmailTokenStatus;

  if (token) {
    const { ok } = await confirmByToken(token);
    emailTokenStatus = `${ok ? "ok" : "invalid"}`;
  } else emailTokenStatus = "missing";

  return NextResponse.redirect(
    `${ENV.BASE_URL}/waitlist/confirm?status=${emailTokenStatus}`,
  );
}
