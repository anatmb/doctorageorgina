import express from "express";
import { createAppointment, getAppointmentsByDate, getAllAppointments, deleteAppointment, updateAppointment } from "../controllers/appointmentsController.js";

const router = express.Router();

// Ruta de prueba
router.get("/test", (req, res) => {
  res.json({ message: "API de citas funcionando correctamente 🚀" });
});

// Crear una nueva cita
router.post("/", createAppointment);

router.get("/", getAllAppointments);

// Obtener citas por fecha (por ejemplo /api/appointments/2025-10-20)
router.get("/:date", getAppointmentsByDate);

// Actualizar cita
router.put("/:id", updateAppointment);

// Eliminar cita
router.delete("/:id", deleteAppointment);




export default router;
