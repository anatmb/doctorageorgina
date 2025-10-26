import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminCitas() {
  const [citas, setCitas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => setCitas(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  const citasPorDia = citas.reduce((acc, cita) => {
    acc[cita.fecha] = acc[cita.fecha] || [];
    acc[cita.fecha].push(cita);
    return acc;
  }, {});

  return (
    <section className="min-h-screen bg-purple-50 p-20 md:p-20">
  <div className="flex flex-col md:flex-row justify-between items-center mb-8">
    <h2 className="text-3xl font-bold text-purple-700 mb-4 md:mb-0">
      📋 Citas por Día
    </h2>
    {/* <button
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
    >
      Cerrar sesión
    </button> */}
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
                <th className="p-2 text-left">Teléfono</th>
                <th className="p-2 text-left">Motivo</th>
              </tr>
            </thead>
            <tbody>
              {citasPorDia[fecha].map((cita) => (
                <tr key={cita.id} className="border-t hover:bg-purple-50">
                  <td className="p-2">{cita.hora}</td>
                  <td className="p-2 font-medium">{cita.nombre} {cita.apellido}</td>
                  <td className="p-2">{cita.telefono}</td>
                  <td className="p-2">{cita.motivo}</td>
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
