// import express from "express";
// import {
//   createAppointment,
//   getAppointmentsByDate,
//   getAllAppointments,
//   getAppointmentById,
//   deleteAppointment,
//   updateAppointment,
//   marcarPacienteComoExistente,
//   getBusySlots
// } from "../controllers/appointmentsController.js";

// const router = express.Router();

// // Ruta de prueba
// router.get("/test", (req, res) => {
//   res.json({ message: "API de citas funcionando correctamente 🚀" });
// });


// router.get("/busy", getBusySlots);


// // Crear nueva cita
// router.post("/", createAppointment);


// // Obtener todas las citas
// router.get("/", getAllAppointments);

// // Obtener citas por fecha
// router.get("/fecha/:date", getAppointmentsByDate); // 👈 cambiamos el path

// router.put("/:dni/marcar-existente", marcarPacienteComoExistente);


// // ✅ Obtener cita por ID (antes de la de fecha)
// router.get("/:id", getAppointmentById);



// // Actualizar cita
// router.put("/:id", updateAppointment);

// // Eliminar cita
// router.delete("/:id", deleteAppointment);


// export default router;

import express from "express";
import {
  createAppointment,
  getAppointmentsByDate,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  updateAppointment,
  marcarPacienteComoExistente,
  getBusySlots
} from "../controllers/appointmentsController.js";

const router = express.Router();

// Rutas específicas PRIMERO
router.get("/test", (req, res) => {
  res.json({ message: "API de citas funcionando correctamente 🚀" });
});

router.get("/busy", getBusySlots);
router.get("/fecha/:date", getAppointmentsByDate);

// 🔥 ESTA DEBE IR ANTES DE /:id



router.put("/:dni/marcar-existente", (req, res, next) => {
  console.log("👉 LLEGUÉ A marcar-existente", req.params.dni);
  next();
}, marcarPacienteComoExistente);

router.put("/:dni/marcar-existente", marcarPacienteComoExistente);

// Generales al final
router.post("/", createAppointment);
router.get("/", getAllAppointments);

router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
