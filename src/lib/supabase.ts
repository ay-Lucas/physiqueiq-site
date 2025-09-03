import { createClient } from "@supabase/supabase-js";
import { ENV } from "./env";

export const supabase = createClient(
  ENV.NEXT_PUBLIC_SUPABASE_URL,
  ENV.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);
