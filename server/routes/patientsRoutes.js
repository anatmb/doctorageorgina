import express from "express";
import { getPatientByDni, getAllPatients,getPatientsWithExpediente, deletePatientByDni  } from "../controllers/patientsController.js";

const router = express.Router();

router.get("/con-expediente", getPatientsWithExpediente); 

router.get("/", getAllPatients);

// Buscar paciente por DNI
 router.get("/:dni", getPatientByDni);

 // 🔴 ESTA ES LA QUE FALTA
router.delete("/:dni", deletePatientByDni);

export default router;