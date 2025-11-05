import express from "express";
import { getPatientByDni } from "../controllers/patientsController.js";

const router = express.Router();

// Buscar paciente por DNI
router.get("/:dni", getPatientByDni);

export default router;