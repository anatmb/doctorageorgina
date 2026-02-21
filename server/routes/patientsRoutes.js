import express from "express";
import { getPatientByDni, getAllPatients,getPatientsWithExpediente, deletePatientByDni,updatePatientByDni} from "../controllers/patientsController.js";

const router = express.Router();

router.get("/con-expediente", getPatientsWithExpediente); 

router.get("/", getAllPatients);

// Buscar paciente por DNI
 router.get("/:dni", getPatientByDni);

 // 🔴 ESTA ES LA QUE FALTA
router.delete("/:dni", deletePatientByDni);

router.put("/:dni", updatePatientByDni);


export default router;