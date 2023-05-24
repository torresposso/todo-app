import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "preact/hooks";

function TodoList({ serverTodos, supabaseCredentials }) {
  const { supabaseUrl, supabaseKey } = supabaseCredentials;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [todos, setTodos] = useState(serverTodos);

  const processTodos = (payload) => {
    let events = {
      "INSERT": () => setTodos([...todos, payload.new]),
      "DELETE": () =>
        setTodos(
          todos.filter((todo) => todo.id !== payload.old.id),
        ),
      "UPDATE": () =>
        setTodos([
          ...todos.filter((todo) => todo.id !== payload.old.id),
          payload.new,
        ]),
    };
    console.log("called");

    return events[payload.eventType]();
  };

  useEffect(() => {
    setTodos(serverTodos);
  }, [serverTodos]);

  useEffect(() => {
    const channel = supabase.channel("realtime todos").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "todos",
      },
      (payload) => {
        processTodos(payload);
      },
    ).subscribe();

    return () => {
      supabase.realtime.removeChannel(channel);
    };
  }, [supabase, todos, setTodos]);
  return (
    <ul>
      {todos.sort((a, b) => (a.created_at > b.created_at ? 1 : -1)).map((
        todo,
      ) => <Todo key={todo.id} todo={todo} />)}
    </ul>
  );
}

function Todo({ todo }) {
  return <li key={todo.id}>{todo.title}</li>;
}
export default TodoList;
