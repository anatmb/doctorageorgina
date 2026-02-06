// Buscar paciente por DNI
// export const getPatientByDni = async (req, res) => {
//   try {
//     const { dni } = req.params;
//     const result = await pool.query("SELECT * FROM patients WHERE dni = $1", [dni]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Paciente no encontrado" });
//     }

//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error("Error al obtener paciente:", error);
//     res.status(500).json({ message: "Error al buscar paciente ❌" });
//   }
// };

import pool from "../db/connection.js";
// export const getPatientByDni = async (req, res) => {
//   try {
//     const dni = Number(req.params.dni);

// console.log(typeof req.params.dni, req.params.dni);
    
//     const result = await pool.query(
      
//          "SELECT * FROM patients WHERE REPLACE(TRIM(dni), ' ', '') = REPLACE(TRIM($1), ' ', '')",
//       [dni]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Paciente no encontrado" });
//     }

//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error("Error al obtener paciente:", error);
//     res.status(500).json({ message: "Error al buscar paciente ❌" });
//   }
// };

export const getPatientByDni = async (req, res) => {
  try {
    const { dni } = req.params;

    const result = await pool.query(
      `
      SELECT 
        p.id,
        p.nombre,
        p.apellido,
        p.dni,
        a.es_nuevo
      FROM patients p
      LEFT JOIN appointments a ON a.patient_id = p.id
      WHERE p.dni = $1
      `,
      [dni]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    // Si TODAS las citas son es_nuevo = true → no tiene expediente
    const tieneExpediente = result.rows.some(r => r.es_nuevo === false);

    res.json({
      paciente: result.rows[0],
      tieneExpediente,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al buscar paciente ❌" });
  }
};



export const getPatientsWithExpediente = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT DISTINCT p.*
      FROM patients p
      JOIN appointments a ON a.patient_id = p.id
      WHERE a.es_nuevo = false
      ORDER BY p.id DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error al listar pacientes con expediente:", error);
    res.status(500).json({ message: "Error ❌" });
  }
};

// Listar todos los pacientes
export const getAllPatients = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM patients ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error al listar pacientes:", error);
    res.status(500).json({ message: "Error al listar pacientes ❌" });
  }
};