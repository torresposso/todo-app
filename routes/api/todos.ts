import { Handlers } from "$fresh/server.ts";

import type { State } from "../_middleware.ts";
import type { Database } from "../../types/db.ts";

interface TodosData extends State {
  todos: Database["public"]["Tables"]["todos"]["Row"][];
}
export const handler: Handlers<TodosData, State> = {
  async GET(_req, ctx) {
    const { data } = await ctx.state.supabaseClient.from("todos").select();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
