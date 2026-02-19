import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Expediente {
  expediente_id: number;
  patient_id: number;
  nombre: string;
  apellido: string;
  dni: string;
  antecedentes: string | null;
  diagnostico: string | null;
  tratamiento: string | null;
  observaciones: string | null;
  created_at: string;
}

interface CitaHistorial {
  fecha: string;
  hora: string;
  motivo: string;
}

export default function VerExpediente() {
  const { dni } = useParams();
  const [expediente, setExpediente] = useState<Expediente | null>(null);
  const [historial, setHistorial] = useState<CitaHistorial[]>([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/expedientes/${dni}`)
  //     .then(res => res.json())
  //     .then(data => setExpediente(data));
  // }, [dni]);


  const handleEditar = () => {
  navigate(`/editar-expediente/${dni}`);
};

  useEffect(() => {
    // Expediente
    fetch(`http://localhost:5000/api/expedientes/${dni}`)
      .then((res) => res.json())
      .then((data) => setExpediente(data));

    // Historial de citas
    fetch(`http://localhost:5000/api/appointments/historial/${dni}`)
      .then((res) => res.json())
      .then((data) => setHistorial(data));
  }, [dni]);

  if (!expediente)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg">
        Cargando expediente...
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white mt-20 shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Expediente Clínico
      </h1>

        <button
    onClick={handleEditar}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Modificar Expediente
  </button>

      <div className="bg-gray-100 p-5 rounded-xl mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Información del Expediente
        </h2>
        <p>
          <strong>ID Paciente:</strong> {expediente.nombre}{" "}
        </p>
        <p>
          <strong>ID Expediente:</strong> {expediente.dni}
        </p>
        <p>
          <strong>Creado:</strong>{" "}
          {new Date(expediente.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 border rounded-xl">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Antecedentes
          </h3>
          <p className="text-gray-700">
            {expediente.antecedentes || "Sin datos"}
          </p>
        </div>

        <div className="p-5 border rounded-xl">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Diagnóstico
          </h3>
          <p className="text-gray-700">
            {expediente.diagnostico || "Sin datos"}
          </p>
        </div>

        <div className="p-5 border rounded-xl">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Tratamiento
          </h3>
          <p className="text-gray-700">
            {expediente.tratamiento || "Sin datos"}
          </p>
        </div>

        <div className="p-5 border rounded-xl md:col-span-2">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Observaciones
          </h3>
          <p className="text-gray-700">
            {expediente.observaciones || "Sin datos"}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Historial de Consultas
        </h2>

        {historial.length === 0 ? (
          <p className="text-gray-500">No hay consultas registradas.</p>
        ) : (
          <table className="w-full border text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Fecha</th>
                <th className="p-2 border">Hora</th>
                <th className="p-2 border">Motivo</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((cita, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">
                    {new Date(cita.fecha).toLocaleDateString()}
                  </td>
                  <td className="p-2 border">{cita.hora.slice(0, 5)}</td>
                  <td className="p-2 border">{cita.motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
