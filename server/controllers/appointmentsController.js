import  pool  from "../db/connection.js";


// Crear nueva cita
export const createAppointment = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, motivo, fecha, hora } = req.body;

    if (!nombre || !apellido || !email || !telefono || !motivo || !fecha || !hora) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    await pool.query(
      `INSERT INTO appointments (nombre, apellido, email, telefono, motivo, fecha, hora)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [nombre, apellido, email, telefono, motivo, fecha, hora]
    );

    res.json({ message: "Cita registrada correctamente ✅" });
  } catch (error) {
    console.error("Error al crear cita:", error);
    res.status(500).json({ message: "Error al guardar la cita ❌" });
  }
};

// Obtener citas por fecha
export const getAppointmentsByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const result = await pool.query(
      `SELECT * FROM appointments WHERE fecha = $1 ORDER BY hora`,
      [date]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener citas:", error);
    res.status(500).json({ message: "Error al obtener las citas ❌" });
  }
};


 export const getAllAppointments = async (req, res) => {
   try {
     const result = await pool.query("SELECT * FROM appointments ORDER BY fecha, hora");
     res.json(result.rows);
   } catch (error) {
     console.error("Error al obtener todas las citas:", error);
     res.status(500).json({ message: "Error al obtener todas las citas ❌" });
   }
 };
