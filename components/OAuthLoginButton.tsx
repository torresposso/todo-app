import type { Provider } from "@supabase/supabase-js";
import type { ComponentChild } from "preact";

interface OAuthLoginButtonProps {
  provider: Provider;
  children: ComponentChild;
}

export default function OAuthLoginButton(props: OAuthLoginButtonProps) {
  return (
    <form action="/login/oauth" method="POST">
      <input type="hidden" value={props.provider} name="provider" />
      <button
        type="submit"
        class="px-4 py-2 w-full bg-white text-black text-lg rounded-lg border-2 border-black disabled:(opacity-50 cursor-not-allowed)"
      >
        {props.children}
      </button>
    </form>
  );
}
