import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// Crear una cita
router.post("/", async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, motivo, fecha, hora } = req.body;

    await pool.query(
      `INSERT INTO appointments (nombre, apellido, email, telefono, motivo, fecha, hora)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [nombre, apellido, email, telefono, motivo, fecha, hora]
    );

    res.json({ message: "Cita registrada correctamente ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar la cita" });
  }
});

// Obtener todas las citas (para el administrador)
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM appointments ORDER BY fecha, hora`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las citas" });
  }
});

export default router;