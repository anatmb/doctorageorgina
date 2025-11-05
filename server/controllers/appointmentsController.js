import  pool  from "../db/connection.js";


// Crear nueva cita
export const createAppointment = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, dni, motivo, fecha, hora } = req.body;

    // Validar campos obligatorios
    if (!nombre || !apellido || !dni || !motivo || !fecha || !hora) {
      return res.status(400).json({ message: "Todos los campos son obligatorios ❌" });
    }

    // 1️⃣ Verificar si el paciente ya existe (por DNI)
    const existingPatient = await pool.query("SELECT id FROM patients WHERE dni = $1", [dni]);

    let patientId;

    if (existingPatient.rows.length > 0) {
      // Paciente ya existe
      patientId = existingPatient.rows[0].id;
    } else {
      // 2️⃣ Crear nuevo paciente
      const newPatient = await pool.query(
        `INSERT INTO patients (nombre, apellido, email, telefono, dni)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id`,
        [nombre, apellido, email, telefono, dni]
      );
      patientId = newPatient.rows[0].id;
    }

    // 3️⃣ Crear la cita vinculada al paciente
    await pool.query(
      `INSERT INTO appointments (patient_id, motivo, fecha, hora, es_nuevo)
       VALUES ($1, $2, $3, $4, $5)`,
      [patientId, motivo, fecha, hora, existingPatient.rows.length === 0]
    );

    res.json({
      message:
        existingPatient.rows.length === 0
          ? "Cita creada correctamente ✅ (nuevo paciente registrado)"
          : "Cita creada correctamente ✅ (paciente existente)",
    });
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