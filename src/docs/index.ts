import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { default as productsDocRouter } from "./products";

const docsApp = new OpenAPIHono();

docsApp.doc("/swagger", {
  openapi: "3.0.0",
  info: {
    title: "API Grupo 2",
    version: "1.0.0"
  }
});

docsApp.route("api", productsDocRouter);

docsApp.get("/docs", swaggerUI({ url: "/api/swagger" }));

export default docsApp;
