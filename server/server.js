// import express from "express";
// import cors from "cors";
// import appointmentsRoutes from "./routes/appointments.js";
// import authRoutes from "./routes/auth.js"; // <--- rutas de login

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Rutas principales
// app.use("/api/appointments", appointmentsRoutes);
// app.use("/api/auth", authRoutes);

// // Ruta no encontrada
// app.use((req, res) => {
//   res.status(404).json({ message: "Ruta no encontrada ❌" });
// });

// // Manejo de errores generales
// app.use((err, req, res, next) => {
//   console.error("Error interno del servidor:", err);
//   res.status(500).json({ message: "Error interno del servidor ❌" });
// });

// // Servidor
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

import express from "express";
import cors from "cors";
import appointmentsRoutes from "./routes/appointments.js";
import authRoutes from "./routes/auth.js";
import  expedientesRoutes from "./routes/expedientesRoutes.js"
import patientsRoutes from "./routes/patientsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/appointments", appointmentsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/expedientes", expedientesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada ❌" });
});

app.use((err, req, res, next) => {
  console.error("Error interno del servidor:", err);
  res.status(500).json({ message: "Error interno del servidor ❌" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
