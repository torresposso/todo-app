import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import { State } from "./_middleware.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, State> = {
  async GET(_req, ctx) {
    const { data } = await ctx.state.supabaseClient.from("todos").select();

    return await ctx.render({
      todos: data,
      user: ctx.state.session?.user.user_metadata,
    });
  },
};
export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </>
  );
}
