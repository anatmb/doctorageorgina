import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Cita = {
  id: string;
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  motivo: string;
  fecha: string;
  hora: string;
};

export default function EditarCita() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cita, setCita] = useState<Cita | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Traer datos de la cita al montar
  useEffect(() => {
    const fetchCita = async () => {
      try {
    const res = await fetch(`http://localhost:5000/api/appointments/${id}`);
        const data = await res.json();
        setCita(data);
      } catch (error) {
        console.error(error);
        alert("Error al cargar la cita ❌");
      } finally {
        setLoading(false);
      }
    };
    fetchCita();
  }, [id]);

  // ✅ Guardar cambios
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cita) return;

    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cita),
      });

      if (res.ok) {
        alert("Cita actualizada correctamente ✅");
        navigate("/admin-citas");
      } else {
        alert("Error al actualizar la cita ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Error al actualizar la cita ❌");
    }
  };

  if (loading) return <p className="text-center mt-20">Cargando cita...</p>;
  if (!cita) return <p className="text-center mt-20">No se encontró la cita.</p>;

  return (
    <section className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          ✏️ Editar Cita
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nombre"
            value={cita.nombre}
            onChange={(e) => setCita({ ...cita, nombre: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={cita.apellido}
            onChange={(e) => setCita({ ...cita, apellido: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="DNI"
            value={cita.dni}
            onChange={(e) => setCita({ ...cita, dni: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={cita.telefono}
            onChange={(e) => setCita({ ...cita, telefono: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          />
          <textarea
            placeholder="Motivo"
            value={cita.motivo}
            onChange={(e) => setCita({ ...cita, motivo: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            type="date"
            value={cita.fecha}
            onChange={(e) => setCita({ ...cita, fecha: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          />
          <select
            value={cita.hora}
            onChange={(e) => setCita({ ...cita, hora: e.target.value })}
            className="border rounded-lg px-3 py-2"
            required
          >
            <option value="">Seleccionar hora</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg mt-2 transition"
          >
            Guardar cambios
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin-citas")}
            className="text-purple-600 mt-2 underline text-sm"
          >
            Volver
          </button>
        </form>
      </div>
    </section>
  );
}
