import { resend } from "./resend";
import { ENV } from "./env";

export function buildConfirmUrl(token: string, origin?: string) {
  const base = origin || ENV.BASE_URL;
  return `${base}/api/waitlist/confirm?token=${token}`;
}

export async function sendVerificationEmail({
  to,
  token,
  origin,
}: {
  to: string;
  token: string;
  origin?: string;
}) {
  const confirmUrl = buildConfirmUrl(token, origin);
  return resend.emails.send({
    from: ENV.VERIFY_EMAIL_FROM,
    to,
    subject: "Confirm your PhysiqueIQ email",
    html: `
      <p>Thanks for joining the PhysiqueIQ waitlist!</p>
      <p>Tap below to confirm your email:</p>
      <p><a href="${confirmUrl}">${confirmUrl}</a></p>
      <p>If you didn’t request this, you can ignore this message.</p>
    `,
  });
}
