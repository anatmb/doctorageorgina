import express from "express";
import cors from "cors";
import appointmentsRoutes from "./routes/appointments.js";
import authRoutes from "./routes/auth.js"; // <--- nuevo

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/auth", authRoutes); // <--- nuevo

// Servidor
app.listen(5000, () => console.log("Servidor en http://localhost:5000"));