import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello World!");
});

app.get("/me", (c) => {
  return c.json({
    success: true,
    message: "tlongizdabezt!",
  });
});

export default {
  fetch: app.fetch,
  port: 5000,
};
