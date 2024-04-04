import type { productDBSchema } from "@/db/schema.js";
import { z } from "zod";

export type ProductEntity = typeof productDBSchema.$inferSelect;

// Validation Schemas
export const productCodeSchema = z
  .string({
    required_error: "El código del producto es requerido"
  })
  .min(1, "El código del producto no puede estar vacío")
  .max(10, "El código del producto no puede tener más de 10 caracteres");
