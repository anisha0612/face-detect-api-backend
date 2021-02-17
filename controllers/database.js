import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    // host: "postgresql-crystalline-57450",
    // user: "gueuvzrfsxfirf",
    // password: "",
    // database: "face-detection",
    host: "process.env.DATABASE_URL",
    ssl: true,
  },
});

export default db;
