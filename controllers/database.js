import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    // host: "postgresql-crystalline-57450",
    // user: "gueuvzrfsxfirf",
    // password: "",
    // database: "face-detection",
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default db;
