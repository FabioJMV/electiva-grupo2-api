import type { Config } from "drizzle-kit";

const uri = process.env.DB_URL;

if (uri === undefined) {
  console.error("DB_URL is not defined");
  process.exit(1);
}

const config: Config = {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  strict: true,
  verbose: true,
  dbCredentials: {
    uri
  }
};

export default config;
