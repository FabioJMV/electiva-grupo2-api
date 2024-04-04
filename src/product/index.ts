import db from "@/db";
import { productDBSchema } from "@/db/schema";
import { getImagePath } from "@/utils/object-storing";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { productCodeSchema } from "./product.entity";

const productRouter = new Hono();

productRouter.get("products", async ({ json }) => {
  try {
    const results = await db.select().from(productDBSchema);

    if (results.length === 0) {
      return json([], 200);
    }

    const products = results.map((product) => {
      const { code } = product;
      const image = getImagePath(code);

      if (!image) {
        return product;
      }

      return { ...product, image };
    });

    return json(products, 200);
  } catch (error) {
    return json({ message: "Error al obtener los productos", error }, 500);
  }
});
productRouter.get("products/:code", async ({ json, req }) => {
  const code = req.param("code");

  const codeIsValid = productCodeSchema.safeParse(code);

  if (!codeIsValid.success) {
    return json({ message: codeIsValid.error.errors[0]?.message }, 400);
  }

  try {
    const [results] = await db.select().from(productDBSchema).where(eq(productDBSchema.code, code));

    if (!results) {
      return json({ message: "Producto no encontrado" }, 404);
    }

    const image = getImagePath(code);

    if (!image) {
      return json(results, 200);
    }

    const product = { ...results, image };

    return json(product, 200);
  } catch (error) {
    return json({ message: "Error al obtener los productos", error }, 500);
  }
});

export default productRouter;
