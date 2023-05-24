// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/api/logout.ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/login/index.tsx";
import * as $5 from "./routes/login/logout.ts";
import * as $6 from "./routes/login/oauth.ts";
import * as $7 from "./routes/login/success.tsx";
import * as $$0 from "./islands/AuthFragmentCatcher.tsx";
import * as $$1 from "./islands/Counter.tsx";
import * as $$2 from "./islands/TodoList.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/api/logout.ts": $2,
    "./routes/index.tsx": $3,
    "./routes/login/index.tsx": $4,
    "./routes/login/logout.ts": $5,
    "./routes/login/oauth.ts": $6,
    "./routes/login/success.tsx": $7,
  },
  islands: {
    "./islands/AuthFragmentCatcher.tsx": $$0,
    "./islands/Counter.tsx": $$1,
    "./islands/TodoList.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
