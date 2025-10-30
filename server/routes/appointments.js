import express from "express";
import {
  createAppointment,
  getAppointmentsByDate,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  updateAppointment,
} from "../controllers/appointmentsController.js";

const router = express.Router();

// Ruta de prueba
router.get("/test", (req, res) => {
  res.json({ message: "API de citas funcionando correctamente 🚀" });
});

// Crear nueva cita
router.post("/", createAppointment);

// Obtener todas las citas
router.get("/", getAllAppointments);

// ✅ Obtener cita por ID (antes de la de fecha)
router.get("/:id", getAppointmentById);

// Obtener citas por fecha
router.get("/fecha/:date", getAppointmentsByDate); // 👈 cambiamos el path

// Actualizar cita
router.put("/:id", updateAppointment);

// Eliminar cita
router.delete("/:id", deleteAppointment);

export default router;

