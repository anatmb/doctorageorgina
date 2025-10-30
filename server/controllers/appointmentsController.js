import  pool  from "../db/connection.js";


// Crear nueva cita
export const createAppointment = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, dni, motivo, fecha, hora } = req.body;

    // Verificamos que todos los campos sean obligatorios
    if (!nombre || !apellido || !email || !telefono || !dni || !motivo || !fecha || !hora) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    await pool.query(
      `INSERT INTO appointments (nombre, apellido, email, telefono, dni, motivo, fecha, hora)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [nombre, apellido, email, telefono, dni, motivo, fecha, hora]
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

 
// 🗑️ Eliminar cita
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM appointments WHERE id = $1", [id]);
    res.json({ message: "Cita eliminada correctamente 🗑️" });
  } catch (error) {
    console.error("Error al eliminar cita:", error);
    res.status(500).json({ message: "Error al eliminar la cita ❌" });
  }
};

// Obtener cita por ID
export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificamos si viene el id y si es un número
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "ID de cita inválido ❌" });
    }

    const result = await pool.query("SELECT * FROM appointments WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Cita no encontrada ❌" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener cita por ID:", error);
    res.status(500).json({ message: error.message || "Error al obtener la cita ❌" });
  }
};

// ✏️ Editar cita
export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, dni, email, telefono, motivo, fecha, hora } = req.body;

    if (!nombre || !apellido || !dni || !telefono || !motivo || !fecha || !hora) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    await pool.query(
      `UPDATE appointments 
       SET nombre=$1, apellido=$2, dni=$3, email=$4, telefono=$5, motivo=$6, fecha=$7, hora=$8
       WHERE id=$9`,
      [nombre, apellido, dni, email, telefono, motivo, fecha, hora, id]
    );

    res.json({ message: "Cita actualizada correctamente ✅" });
  } catch (error) {
    console.error("Error al actualizar cita:", error);
    res.status(500).json({ message: "Error al actualizar la cita ❌" });
  }
};