import { v4 } from "uuid";
import { ENV } from "./env";
import { validateTurnstileToken } from "next-turnstile";

export async function verifyTurnstile(token: string) {
  const validationResponse = await validateTurnstileToken({
    token: token,
    secretKey: ENV.TURNSTILE_SECRET_KEY!,
    // Optional: Add an idempotency key to prevent token reuse
    idempotencyKey: v4(),
    sandbox:
      process.env.NODE_ENV === "development" &&
      process.env.NEXT_PUBLIC_TURNSTILE_BYPASS !== "true",
  });
  return Boolean(validationResponse.success);
}
