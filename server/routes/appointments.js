import express from "express";
import { createAppointment, getAppointmentsByDate } from "../controllers/appointmentsController.js";

const router = express.Router();

// Crear una nueva cita
router.post("/", createAppointment);

// Obtener citas por fecha específica (por ejemplo /api/appointments/2025-10-20)
router.get("/:date", getAppointmentsByDate);

export default router;
