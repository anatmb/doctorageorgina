import express from "express";
import { createExpediente, getExpedienteByDni} from "../controllers/expedientesController.js";

const router = express.Router();

// Crear expediente
router.post("/", createExpediente);

// Obtener expediente por ID del paciente
// router.get("/:id", getExpedienteByPatientId);
router.get("/:dni", getExpedienteByDni);

export default router;