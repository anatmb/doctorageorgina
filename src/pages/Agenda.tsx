import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar-custom.css";

export default function Agenda() {
  const [date, setDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("");
  const [step, setStep] = useState(1); // 🔹 1 = calendario, 2 = formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
  });

  // Días no disponibles
  const unavailableDates = [
    new Date(2025, 9, 7),
    new Date(2025, 9, 10),
    new Date(2025, 9, 14),
  ];

  const availableHours = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const formatDate = (d) => d.toISOString().split("T")[0];
  const isUnavailable = (day) =>
    unavailableDates.some((d) => formatDate(d) === formatDate(day));

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedHour("");
  };

  const handleConfirm = () => {
    setStep(2); // 🔹 Avanzar al formulario
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Cita confirmada para ${formData.nombre}\n📅 ${date.toLocaleDateString()} a las ${selectedHour}\n📞 ${formData.telefono}\n✉ ${formData.email}\n🩺 Motivo: ${formData.motivo}`
    );
    // Aquí podrías enviar los datos al backend o WhatsApp
  };

  return (
    <section className="min-h-screen bg-purple-50 flex flex-col pt-20 md:flex-row md:pt-24 justify-center items-start gap-10 p-6 md:p-24">
      <div className="bg-white shadow-md rounded-2xl p-6 flex-1">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Agenda tu cita
        </h2>

        {step === 1 && (
          <>
            {/* 📅 Calendario */}
            <Calendar
              onChange={handleDateChange}
              value={date}
              tileDisabled={({ date }) => isUnavailable(date)}
              tileClassName={({ date }) =>
                isUnavailable(date) ? "unavailable-day" : ""
              }
            />

            <div className="mt-6 text-center">
              <p className="text-gray-700">
                Fecha seleccionada:{" "}
                <span className="font-semibold text-purple-700">
                  {date.toLocaleDateString()}
                </span>
              </p>
            </div>

            {!isUnavailable(date) && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-purple-700 mb-3 text-center">
                  Selecciona una hora disponible:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableHours.map((hour) => (
                    <button
                      key={hour}
                      onClick={() => setSelectedHour(hour)}
                      className={`border rounded-full py-2 text-sm font-medium transition ${
                        selectedHour === hour
                          ? "bg-purple-600 text-white"
                          : "border-purple-400 text-purple-700 hover:bg-purple-100"
                      }`}
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              <button
                disabled={!selectedHour || isUnavailable(date)}
                onClick={handleConfirm}
                className={`mt-4 px-6 py-2 rounded-full font-semibold transition ${
                  !selectedHour || isUnavailable(date)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                Confirmar cita
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold text-purple-700 mb-4 text-center">
              Ingresa tus datos
            </h3>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Motivo de la consulta</label>
              <textarea
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                rows="3"
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Enviar cita
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 📣 Publicidad / Información */}
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

