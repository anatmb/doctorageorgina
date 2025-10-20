import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "clinicadb",
  password: "tu_contraseña",
  port: 5432,
});