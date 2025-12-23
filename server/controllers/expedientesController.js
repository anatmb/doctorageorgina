import pool from "../db/connection.js";

// ➤ Crear expediente
// export const createExpediente = async (req, res) => {
//   try {
//     const { patient_id, antecedentes, diagnostico, tratamiento, observaciones } = req.body;

//     await pool.query(
//       `INSERT INTO expedientes (patient_id, antecedentes, diagnostico, tratamiento, observaciones)
//        VALUES ($1, $2, $3, $4, $5)`,
//       [patient_id, antecedentes, diagnostico, tratamiento, observaciones]
//     );

//     res.json({ message: "Expediente registrado correctamente ✅" });
//   } catch (error) {
//     console.error("Error al crear expediente:", error);
//     res.status(500).json({ message: "Error al crear expediente ❌" });
//   }
// };

export const createExpediente = async (req, res) => {
  try {
    const { patient_dni, antecedentes, diagnostico, tratamiento, observaciones } = req.body;

    // 1️⃣ Buscar paciente por DNI
    const patientResult = await pool.query(
      "SELECT id FROM patients WHERE dni = $1",
      [patient_dni]
    );

     console.log("PACIENTE ENCONTRADO:", patientResult.rows);

    if (patientResult.rows.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const patient_id = patientResult.rows[0].id;

    // 2️⃣ Insertar expediente
    await pool.query(
      `INSERT INTO expedientes (patient_id, antecedentes, diagnostico, tratamiento, observaciones)
       VALUES ($1, $2, $3, $4, $5)`,
      [patient_id, antecedentes, diagnostico, tratamiento, observaciones]
    );

    
    // 🔥 3️⃣ MARCAR CITA COMO NO NUEVA
    await pool.query(
      "UPDATE appointments SET es_nuevo = false WHERE patient_id = $1",
      [patient_dni]
    );


    res.json({ message: "Expediente creado correctamente ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear expediente ❌" });
  }
};


// ➤ Obtener expediente por ID de paciente
// export const getExpedienteByPatientId = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await pool.query(
//       "SELECT * FROM expedientes WHERE patient_id = $1",
//       [id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Este paciente no tiene expediente" });
//     }

//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error("Error al obtener expediente:", error);
//     res.status(500).json({ message: "Error al obtener expediente ❌" });
//   }
// };
// export const getExpedienteByDni = async (req, res) => {
//   try {
//     const { dni } = req.params;

//     const result = await pool.query(
//       `
//       SELECT e.*, p.nombre, p.apellido, p.dni
//       FROM expedientes e
//       JOIN patients p ON p.id = e.patient_id
//       WHERE p.dni = $1
//       `,
//       [dni]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "El paciente no tiene expediente" });
//     }

//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error("Error al obtener expediente:", error);
//     res.status(500).json({ message: "Error al obtener expediente ❌" });
//   }
// };

export const getExpedienteByDni = async (req, res) => {
  try {
    const { dni } = req.params;

    const result = await pool.query(
      `
      SELECT 
        e.id AS expediente_id,
        e.patient_id,
        e.antecedentes,
        e.diagnostico,
        e.tratamiento,
        e.observaciones,
        e.created_at,

        p.nombre,
        p.apellido,
        p.dni
      FROM expedientes e
      JOIN patients p ON p.id = e.patient_id
      WHERE p.dni = $1
      `,
      [dni]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "El paciente no tiene expediente" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener expediente:", error);
    res.status(500).json({ message: "Error al obtener expediente ❌" });
  }
};
