import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import TodoList from "../islands/TodoList.tsx";
import { State } from "./_middleware.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, State> = {
  async GET(_req, ctx) {
    const { data } = await ctx.state.supabaseClient.from("todos").select()
      .order("created_at", { ascending: false });

    return await ctx.render({
      todos: data,
      user: ctx.state.session?.user,
      supabaseCredentials: {
        supabaseKey: ctx.state.supabaseClient.supabaseKey,
        supabaseUrl: ctx.state.supabaseClient.supabaseUrl,
      },
    });
  },
};
export default function Home(props: PageProps) {
  console.log("props", props);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        hello there
      </div>
      <TodoList
        serverTodos={props.data.todos}
        supabaseCredentials={props.data.supabaseCredentials}
      />
    </>
  );
}
