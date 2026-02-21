import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Expediente {
  antecedentes: string;
  diagnostico: string;
  tratamiento: string;
  observaciones: string;
}

export default function EditarExpediente() {
  const { dni } = useParams();
  const navigate = useNavigate();
  const [expediente, setExpediente] = useState<Expediente>({
    antecedentes: "",
    diagnostico: "",
    tratamiento: "",
    observaciones: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/expedientes/${dni}`)
      .then(res => res.json())
      .then(data => setExpediente(data));
  }, [dni]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExpediente({
      ...expediente,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `http://localhost:5000/api/expedientes/${dni}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expediente),
      }
    );

    if (!res.ok) {
      alert("Error al actualizar");
      return;
    }

    alert("Expediente actualizado correctamente");
    navigate(`/expediente/${dni}`);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        Editar Expediente
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <textarea
          name="antecedentes"
          value={expediente.antecedentes}
          onChange={handleChange}
          placeholder="Antecedentes"
          className="w-full p-2 border rounded"
        />

        <textarea
          name="diagnostico"
          value={expediente.diagnostico}
          onChange={handleChange}
          placeholder="Diagnóstico"
          className="w-full p-2 border rounded"
        />

        <textarea
          name="tratamiento"
          value={expediente.tratamiento}
          onChange={handleChange}
          placeholder="Tratamiento"
          className="w-full p-2 border rounded"
        />

        <textarea
          name="observaciones"
          value={expediente.observaciones}
          onChange={handleChange}
          placeholder="Observaciones"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
