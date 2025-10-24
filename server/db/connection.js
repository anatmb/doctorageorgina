// db/connection.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "clinicadb",
  password: "1234",
  port: 5432,
});

export default pool;