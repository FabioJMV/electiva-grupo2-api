import { productDBSchema } from "@/db/schema";
import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";

const productSelectSchema = createSelectSchema(productDBSchema, {
  code: (schema) =>
    schema.code.openapi({
      description: "Código del producto",
      example: "abcde12345"
    }),
  name: (schema) =>
    schema.name.openapi({
      description: "Nombre del producto",
      example: "Producto de prueba"
    }),
  price: (schema) =>
    schema.price.openapi({
      description: "Precio del producto",
      example: "100.00"
    }),
  description: (schema) =>
    schema.description.openapi({
      description: "Descripción del producto",
      example: "Producto de prueba"
    }),
  quantity: (schema) =>
    schema.quantity.openapi({
      description: "Stock del producto",
      example: 100
    }),
  tax: (schema) =>
    schema.tax.openapi({
      description: "Impuesto del producto",
      example: "21.00"
    })
}).merge(
  z.object({
    image: z
      .string()
      .openapi({
        description: "Ruta de la imagen del producto",
        example: "/images/abcde12345.jpg"
      })
      .optional()
  })
);

export const getAllProductsRoute = createRoute({
  method: "get",
  path: "products",
  responses: {
    200: {
      description: "Lista de productos",
      content: {
        "application/json": {
          schema: productSelectSchema.array()
        }
      }
    },
    500: {
      description: "Error al obtener los productos",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string().openapi({
              description: "Mensaje de error",
              example: "Error al obtener los productos"
            }),
            error: z.unknown()
          })
        }
      }
    }
  },
  tags: ["Productos"]
});

export const getProductByCodeRoute = createRoute({
  method: "get",
  path: "products/{code}",
  request: {
    params: z.object({
      code: z
        .string()
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: "code",
            in: "path",
            description: "Código del producto",
            required: true,
            example: "abcde12345"
          },
          type: "string",
          example: "abcde12345"
        })
    })
  },
  responses: {
    200: {
      description: "Producto",
      content: {
        "application/json": {
          schema: productSelectSchema
        }
      }
    },
    400: {
      description: "Código de producto inválido",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string().openapi({
              description: "Mensaje de error",
              example: "Código de producto inválido"
            })
          })
        }
      }
    },
    404: {
      description: "Producto no encontrado",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string().openapi({
              description: "Mensaje de error",
              example: "Producto no encontrado"
            })
          })
        }
      }
    },
    500: {
      description: "Error al obtener los productos",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string().openapi({
              description: "Mensaje de error"
            }),
            error: z.unknown()
          })
        }
      }
    }
  },
  tags: ["Productos"]
});
