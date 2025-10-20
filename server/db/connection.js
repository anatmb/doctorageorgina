// db/connection.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "clinicadb",
  password: "tu_contraseña",
  port: 5432,
});

export default pool;