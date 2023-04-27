import { createServerSupabaseClient } from "@supabase/auth-helpers-shared";
import { createClient } from "@supabase/supabase-js";

import { getCookies, setCookie } from "std/http/cookie.ts";
import { Database } from "../types/db.ts";

export type SupabaseClient = ReturnType<typeof createSupabaseClient>;

export function createSupabaseClient(
  requestHeaders: Headers,
  responseHeaders?: Headers
) {
  return createServerSupabaseClient<Database>({
    supabaseUrl: Deno.env.get("SUPABASE_API_URL")!,
    supabaseKey: Deno.env.get("SUPABASE_ANON_KEY")!,
    getRequestHeader: (key) => requestHeaders.get(key) ?? undefined,
    getCookie: (name) => {
      const cookie = getCookies(requestHeaders)[name] ?? "";
      return decodeURIComponent(cookie);
    },
    setCookie: (name, value, options) => {
      if (responseHeaders) {
        setCookie(responseHeaders, {
          name,
          value: encodeURIComponent(value),
          ...options,
          sameSite: "Lax",
          httpOnly: false,
        });
      }
    },
  });
}

// Required to bypass Row Level Security (RLS)
export const supabaseAdminClient = createClient(
  Deno.env.get("SUPABASE_API_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);
