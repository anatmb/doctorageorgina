export const createExpediente = async (req, res) => {
  try {
    const { patient_id, antecedentes, diagnostico, tratamiento, observaciones } = req.body;

    await pool.query(
      `INSERT INTO expedientes (patient_id, antecedentes, diagnostico, tratamiento, observaciones)
       VALUES ($1, $2, $3, $4, $5)`,
      [patient_id, antecedentes, diagnostico, tratamiento, observaciones]
    );

    res.json({ message: "Expediente registrado correctamente ✅" });
  } catch (error) {
    console.error("Error al crear expediente:", error);
    res.status(500).json({ message: "Error al crear expediente ❌" });
  }
};