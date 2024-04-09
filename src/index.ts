import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import docsApp from "./docs";
import productRouter from "./product";

import "dotenv/config";

const port = Number.parseInt(process.env.PORT || "3000");

const app = new Hono();

// Middlewares
app.use(cors());
app.use(logger());
app.use(prettyJSON());

// Routes
app.route("api", productRouter);
app.route("api", docsApp);

serve({ fetch: app.fetch, port }, ({ port }) => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Docs running on http://localhost:${port}/api/docs`);
});
