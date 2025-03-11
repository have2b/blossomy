import { sql } from "bun";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello World!");
});

app.get("/me", (c) => {
  return c.json({
    name: "Long",
  });
});

app.get("/db", async (c) => {
  const res = await sql`SELECT * FROM public.user`;

  return c.json({
    success: true,
    message: res,
  });
});

export default {
  fetch: app.fetch,
  port: 5000,
};
