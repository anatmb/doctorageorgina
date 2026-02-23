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

import pool from "../db/connection.js";

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
        p.email,
        p.telefono,
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

// 🔴 Eliminar paciente por DNI
export const deletePatientByDni = async (req, res) => {
  try {
    const { dni } = req.params;

    // Primero borrar citas (foreign key)
    await pool.query(
      `
      DELETE FROM appointments
      WHERE patient_id = (SELECT id FROM patients WHERE dni = $1)
      `,
      [dni]
    );

    // Luego borrar expediente
    await pool.query(
      `
      DELETE FROM expedientes
      WHERE patient_id = (SELECT id FROM patients WHERE dni = $1)
      `,
      [dni]
    );

    // Finalmente borrar paciente
    const result = await pool.query(
      "DELETE FROM patients WHERE dni = $1 RETURNING *",
      [dni]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    res.json({ message: "Paciente eliminado correctamente ✅" });

  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    res.status(500).json({ message: "Error al eliminar ❌" });
  }
};


// 🟡 Modificar paciente por DNI
export const updatePatientByDni = async (req, res) => {
  try {
    const { dni } = req.params;
    const { nombre, apellido, telefono, email } = req.body;

    const result = await pool.query(
      `
      UPDATE patients
      SET nombre = $1,
          apellido = $2,
          telefono = $3,
          email = $4
      WHERE dni = $5
      RETURNING *
      `,
      [nombre, apellido, telefono, email, dni]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al modificar paciente:", error);
    res.status(500).json({ message: "Error al modificar ❌" });
  }
};
