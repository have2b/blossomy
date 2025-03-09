import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World!");
});

export default {
  fetch: app.fetch,
  port: 5000,
};
