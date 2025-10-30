import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Tipo para las citas
type Cita = {
  id: string;
  nombre: string;
  apellido: string;
  dni: string | null; // Puede ser null
  telefono: string;
  motivo: string;
  fecha: string;
  hora: string;
};

export default function AdminCitas() {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [searchDni, setSearchDni] = useState("");
  const navigate = useNavigate();

  // 🔹 Cargar citas desde el backend
  const fetchCitas = () => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data: Cita[]) => setCitas(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCitas();
  }, [navigate]);

  // 🔹 Cerrar sesión
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  // 🔹 Eliminar cita
  const handleDelete = async (id: string) => {
    if (window.confirm("¿Seguro que deseas eliminar esta cita?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setCitas((prev: Cita[]) => prev.filter((c) => c.id !== id));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 🔹 Editar cita
  const handleEdit = (id: string) => {
    navigate(`/editar-cita/${id}`);
  };

  // 🔹 Filtrar citas por DNI (seguro si es null)
  const citasFiltradas = citas.filter((cita) =>
    (cita.dni || "").toLowerCase().includes(searchDni.toLowerCase())
  );

  // 🔹 Agrupar por fecha
  const citasPorDia: Record<string, Cita[]> = citasFiltradas.reduce((acc, cita) => {
    acc[cita.fecha] = acc[cita.fecha] || [];
    acc[cita.fecha].push(cita);
    return acc;
  }, {} as Record<string, Cita[]>);

  return (
    <section className="min-h-screen bg-purple-50 p-6 md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-purple-700">
          📋 Administrar Citas
        </h2>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Buscar por DNI..."
            value={searchDni}
            onChange={(e) => setSearchDni(e.target.value)}
            className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
          />
          {/* <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Cerrar sesión
          </button> */}
        </div>
      </div>

      {Object.keys(citasPorDia).length === 0 ? (
        <p className="text-gray-600 text-center">No hay citas registradas aún.</p>
      ) : (
        Object.keys(citasPorDia).map((fecha) => (
          <div key={fecha} className="mb-6 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-600 mb-3 border-b border-purple-100 pb-2">
              {fecha}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="p-2 text-left">Hora</th>
                    <th className="p-2 text-left">Nombre</th>
                    <th className="p-2 text-left">DNI</th>
                    <th className="p-2 text-left">Teléfono</th>
                    <th className="p-2 text-left">Motivo</th>
                    <th className="p-2 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {citasPorDia[fecha].map((cita) => (
                    <tr key={cita.id} className="border-t hover:bg-purple-50">
                      <td className="p-2">{cita.hora}</td>
                      <td className="p-2 font-medium">
                        {cita.nombre} {cita.apellido}
                      </td>
                      <td className="p-2">{cita.dni || "-"}</td>
                      <td className="p-2">{cita.telefono}</td>
                      <td className="p-2">{cita.motivo}</td>
                      <td className="p-2 flex gap-2">
                        <button
                          onClick={() => handleEdit(cita.id)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(cita.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
