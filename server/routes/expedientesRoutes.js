import express from "express";
import { createExpediente, getExpedienteByDni, updateExpediente} from "../controllers/expedientesController.js";

const router = express.Router();

// Crear expediente
router.post("/", createExpediente);

// Obtener expediente por ID del paciente
// router.get("/:id", getExpedienteByPatientId);
router.get("/:dni", getExpedienteByDni);

router.put("/:dni", updateExpediente); 

export default router;