import { OpenAPIHono } from "@hono/zod-openapi";
import { getAllProductsRoute, getProductByCodeRoute } from "./products.routes";

const app = new OpenAPIHono();

app.openapi(getAllProductsRoute, ({ json }) => {
  return json(
    [
      {
        code: "abcde12345",
        name: "Producto",
        price: "100.00",
        description: "Producto de prueba",
        quantity: 100
      }
    ],
    200
  );
});
app.openapi(getProductByCodeRoute, ({ json, req }) => {
  const code = req.param("code");
  if (!code) {
    return json(
      {
        message: "Código de producto no encontrado",
        error: "not_found"
      },
      404
    );
  }
  return json(
    {
      code,
      name: "Producto",
      price: "100.00",
      description: "Producto de prueba",
      quantity: 100
    },
    200
  );
});

export default app;
