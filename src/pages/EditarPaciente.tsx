import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditarPaciente() {
  const { dni } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  // 🔹 Traer datos del paciente
  useEffect(() => {
    fetch(`http://localhost:5000/api/patients/${dni}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          nombre: data.paciente.nombre,
          apellido: data.paciente.apellido,
          telefono: data.paciente.telefono,
          email: data.paciente.email,
        });
      });
  }, [dni]);

  // 🔹 Guardar cambios
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/patients/${dni}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Paciente actualizado ✅");
    navigate("/pacientes");
  };

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white p-8 shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Editar Paciente</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          placeholder="Nombre"
          className="w-full border p-2 rounded"
        />
        <input
          value={form.apellido}
          onChange={(e) => setForm({ ...form, apellido: e.target.value })}
          placeholder="Apellido"
          className="w-full border p-2 rounded"
        />
        <input
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          placeholder="Teléfono"
          className="w-full border p-2 rounded"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}