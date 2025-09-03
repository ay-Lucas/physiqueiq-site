const get = (key: string) => {
  const v = process.env[key];
  if (!v) throw new Error(`Missing env: ${key}`);
  return v;
};

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",

  NEXT_PUBLIC_SUPABASE_URL: get("NEXT_PUBLIC_SUPABASE_URL"),
  SUPABASE_URL: get("SUPABASE_URL"),
  SUPABASE_SERVICE_ROLE_KEY: get("SUPABASE_SERVICE_ROLE_KEY"),

  RESEND_API_KEY: get("RESEND_API_KEY"),
  VERIFY_EMAIL_FROM: get("VERIFY_EMAIL_FROM"),

  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  TURNSTILE_BYPASS: process.env.TURNSTILE_BYPASS === "true",
};
