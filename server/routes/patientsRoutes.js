import express from "express";
import { getPatientByDni, getAllPatients,getPatientsWithExpediente  } from "../controllers/patientsController.js";

const router = express.Router();

router.get("/con-expediente", getPatientsWithExpediente); 

router.get("/", getAllPatients);

// Buscar paciente por DNI
 router.get("/:dni", getPatientByDni);

export default router;