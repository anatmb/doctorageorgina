// import { useLocation, useParams } from "react-router-dom";

// export default function CrearExpediente() {
//   const { dni } = useParams();
//   const { state } = useLocation();
//   const cita = state?.cita;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-green-700">Crear expediente</h1>

//       <p className="mt-3 text-gray-700">DNI: {dni}</p>
//       <p className="text-gray-700">
//         Paciente: {cita?.nombre} {cita?.apellido}
//       </p>

//       {/* Aquí va tu formulario de creación */}
//     </div>
//   );
// }

import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CrearExpediente() {
  const { dni } = useParams(); // patient_id
  const { state } = useLocation();
  const navigate = useNavigate();
  const cita = state?.cita;

  const [form, setForm] = useState({
    antecedentes: "",
    diagnostico: "",
    tratamiento: "",
    observaciones: "",
  });

  // Manejo de cambios
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar al backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/expedientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient_dni: dni,
        antecedentes: form.antecedentes,
        diagnostico: form.diagnostico,
        tratamiento: form.tratamiento,
        observaciones: form.observaciones,
      }),
    });


      // ✅ 2️⃣ MARCAR PACIENTE COMO EXISTENTE
  await fetch(
    `http://localhost:5000/api/appointments/${dni}/marcar-existente`,
    {
      method: "PUT",
    }
  );

    navigate(`/expediente/${dni}`);
      // navigate("/admin", { replace: false });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-20">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Crear Expediente Clínico
      </h1>

      <div className="mb-4">
        <p className="text-gray-700 font-semibold">
          Paciente: {cita?.nombre} {cita?.apellido}
        </p>
        <p className="text-gray-500">DNI: {dni}</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* ANTECEDENTES */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Antecedentes
          </label>
          <textarea
            name="antecedentes"
            className="w-full border rounded-lg p-3"
            rows={3}
            onChange={handleChange}
          />
        </div>

        {/* DIAGNÓSTICO */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Diagnóstico
          </label>
          <textarea
            name="diagnostico"
            className="w-full border rounded-lg p-3"
            rows={3}
            onChange={handleChange}
          />
        </div>

        {/* TRATAMIENTO */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Tratamiento
          </label>
          <textarea
            name="tratamiento"
            className="w-full border rounded-lg p-3"
            rows={3}
            onChange={handleChange}
          />
        </div>

        {/* OBSERVACIONES */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Observaciones
          </label>
          <textarea
            name="observaciones"
            className="w-full border rounded-lg p-3"
            rows={3}
            onChange={handleChange}
          />
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Guardar expediente
        </button>
      </form>
    </div>
  );
}
