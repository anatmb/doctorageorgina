import express from "express";
import cors from "cors";
import appointmentsRoutes from "./routes/appointments.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/appointments", appointmentsRoutes);

app.listen(5000, () => console.log("Servidor en http://localhost:5000"));