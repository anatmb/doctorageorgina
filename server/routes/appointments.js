import express from "express";
import {
  createAppointment,
  getAppointmentsByDate,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  updateAppointment,
  getBusySlots
} from "../controllers/appointmentsController.js";

const router = express.Router();

// Ruta de prueba
router.get("/test", (req, res) => {
  res.json({ message: "API de citas funcionando correctamente 🚀" });
});


router.get("/busy", getBusySlots);


// Crear nueva cita
router.post("/", createAppointment);


// Obtener todas las citas
router.get("/", getAllAppointments);

// Obtener citas por fecha
router.get("/fecha/:date", getAppointmentsByDate); // 👈 cambiamos el path

// ✅ Obtener cita por ID (antes de la de fecha)
router.get("/:id", getAppointmentById);



// Actualizar cita
router.put("/:id", updateAppointment);

// Eliminar cita
router.delete("/:id", deleteAppointment);

export default router;

