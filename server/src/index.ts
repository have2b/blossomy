import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello World!");
});

export default {
  fetch: app.fetch,
  port: 5000,
};
