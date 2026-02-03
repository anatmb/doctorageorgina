import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar"; // npm install react-calendar
import "react-calendar/dist/Calendar.css";

type Cita = {
  id: string;
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  motivo: string;
  fecha: string;
  hora: string;
  es_nuevo: boolean;
};

export default function AdminCitas() {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>(new Date());
  const navigate = useNavigate();
  const [dniBusqueda, setDniBusqueda] = useState("");

  // 🔹 Obtener citas desde el backend
  const fetchCitas = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments");
      const data = await res.json();
      setCitas(data);
    } catch (error) {
      console.error("Error al obtener citas:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCitas();
  }, [navigate]);

  // 🔹 Filtrar citas por la fecha seleccionada
  const citasDelDia = citas.filter((cita) => {
    const fechaCita = cita.fecha.split("T")[0];
    const fechaSeleccionadaISO = fechaSeleccionada.toISOString().split("T")[0];
    return fechaCita === fechaSeleccionadaISO;
  });

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col lg:flex-row p-6 pt-16">
      {/* Panel Izquierdo: Lista de Citas */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Citas para hoy (
          {new Date().toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
          )
        </h1>

        <button
          onClick={() => navigate("/calendario")}
          className="mb-6 bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-200 transition"
        >
          Ver Agenda Completa
        </button>

        {citasDelDia.length > 0 ? (
          <ul className="space-y-4">
            {citasDelDia.map((cita) => (
              <li
                key={cita.id}
                className="flex justify-between items-center border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {cita.nombre} {cita.apellido} —{" "}
                    <span className="text-blue-600">
                      {cita.hora.slice(0, 5)}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">{cita.motivo}</p>
                  {cita.es_nuevo && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                      🆕 Paciente nuevo
                    </span>
                  )}
                </div>
                  <button
                  onClick={() =>
                    navigate(
                      cita.es_nuevo
                        ? `/expediente/${cita.dni}/crear`
                        : `/expediente/${cita.dni}`,
                      { state: { cita } }
                    )
                  }
                  className="text-blue-600 hover:underline text-sm"
                >
                  {cita.es_nuevo ? "Crear expediente" : "Abrir expediente"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">
            No hay citas para esta fecha.
          </p>
        )}
      </div>

      {/* Panel Derecho: Calendario + Recordatorios */}
      <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <Calendar
            onChange={(date) => setFechaSeleccionada(date as Date)}
            value={fechaSeleccionada}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
    Buscar paciente por DNI
  </h2>

  <input
    type="text"
    placeholder="Ingrese DNI del paciente"
    value={dniBusqueda}
    onChange={(e) => setDniBusqueda(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-2 mb-3"
  />

  <button
    onClick={async () => {
      if (!dniBusqueda) return alert("Ingrese un DNI");

      try {
        const res = await fetch(
           `http://localhost:5000/api/patients/${dniBusqueda}`
        
        );

        if (!res.ok) {
          alert("Paciente no registrado ❌");
          return;
        }

        

        // Si existe, abrir expediente
        navigate(`/expediente/${dniBusqueda}`);
      } catch (error) {
        console.error(error);
        alert("Error al buscar paciente");
      }
    }}
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Buscar paciente
  </button>

        </div>
      </div>
    </section>
  );
}

