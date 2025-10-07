import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-custom.css"; // para estilos personalizados

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const unavailableDates = [
    new Date(2025, 9, 7),
    new Date(2025, 9, 10),
    new Date(2025, 9, 14),
  ];

  // Formatea fechas para comparar
  const formatDate = (d) => d.toISOString().split("T")[0];

  return (
    <section className="min-h-screen bg-purple-50 flex flex-col md:flex-row justify-center items-start gap-10 p-6 md:p-12">
      {/* Calendario */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex-1">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Agenda tu cita
        </h2>

        <Calendar
          onChange={setDate}
          value={date}
          tileDisabled={({ date }) =>
            unavailableDates.some((d) => formatDate(d) === formatDate(date))
          }
          tileClassName={({ date }) => {
            if (unavailableDates.some((d) => formatDate(d) === formatDate(date))) {
              return "unavailable-day";
            }
          }}
        />

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Fecha seleccionada:{" "}
            <span className="font-semibold text-purple-700">
              {date.toLocaleDateString()}
            </span>
          </p>
          <button
            disabled={unavailableDates.some((d) => formatDate(d) === formatDate(date))}
            className={`mt-4 px-6 py-2 rounded-full font-semibold transition 
              ${
                unavailableDates.some((d) => formatDate(d) === formatDate(date))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
          >
            Confirmar cita
          </button>
        </div>
      </div>

      {/* Publicidad / Información */}
      <aside className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/3">
        <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
          Promociones y Noticias
        </h3>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded">
            <p className="font-semibold">Colposcopía + Consulta</p>
            <p className="text-gray-600">$450 - Solo este mes</p>
          </div>
          <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded">
            <p className="font-semibold">Chequeo Preventivo</p>
            <p className="text-gray-600">Agenda tu turno online y evita esperas</p>
          </div>
          <div className="p-4 border-l-4 border-pink-400 bg-pink-50 rounded">
            <p className="font-semibold">Preguntas Frecuentes</p>
            <p className="text-gray-600">Resuelve tus dudas antes de tu cita</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
