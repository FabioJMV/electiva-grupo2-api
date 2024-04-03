import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";

import "dotenv/config";

const DB_URL = process.env.DB_URL;

if (DB_URL === undefined) {
  console.error("DB_URL is not defined");
  process.exit(1);
}

const poolConnection = createPool(DB_URL);

const db = drizzle(poolConnection, {
  logger: true,
  mode: "default"
});

export default db;
