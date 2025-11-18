import { useLocation, useParams } from "react-router-dom";

export default function CrearExpediente() {
  const { dni } = useParams();
  const { state } = useLocation();
  const cita = state?.cita;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">Crear expediente</h1>

      <p className="mt-3 text-gray-700">DNI: {dni}</p>
      <p className="text-gray-700">
        Paciente: {cita?.nombre} {cita?.apellido}
      </p>

      {/* Aquí va tu formulario de creación */}
    </div>
  );
}