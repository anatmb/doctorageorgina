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
export const getPatientByDni = async (req, res) => {
  try {
    const dni = Number(req.params.dni);

console.log(typeof req.params.dni, req.params.dni);
    
    const result = await pool.query(
      
         "SELECT * FROM patients WHERE REPLACE(TRIM(dni), ' ', '') = REPLACE(TRIM($1), ' ', '')",
      [dni]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener paciente:", error);
    res.status(500).json({ message: "Error al buscar paciente ❌" });
  }
};