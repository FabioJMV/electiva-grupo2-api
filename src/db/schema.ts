import { decimal, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const productDBSchema = mysqlTable("producto", {
  code: varchar("codigo", { length: 10 }).primaryKey(),
  name: varchar("nombre", { length: 50 }).notNull(),
  description: varchar("descripcion", { length: 255 }).notNull(),
  quantity: int("cantidad").notNull(),
  price: decimal("precio", { precision: 10, scale: 2 }).notNull()
});
