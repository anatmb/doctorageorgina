import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Agenda() {
  const [step, setStep] = useState<"calendar" | "form">("calendar");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    motivo: "",
  });

  const handleConfirm = () => {
    if (!selectedDate) {
      alert("Por favor selecciona una fecha.");
      return;
    }
    if (!selectedTime) {
      alert("Por favor selecciona una hora.");
      return;
    }
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", { selectedDate, selectedTime, ...formData });
    alert("Tu turno fue enviado correctamente 🩺");
    setStep("calendar");
    setFormData({ nombre: "", apellido: "", email: "", telefono: "", motivo: "" });
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <section className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-4 py-10">
      {step === "calendar" && (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md text-center">
          <FontAwesomeIcon icon={faCalendarDays} className="text-purple-600 text-4xl mb-3" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Selecciona tu turno</h2>
          <p className="text-gray-600 mb-4">Elige el día y la hora disponible para tu consulta</p>

          {/* Selección de fecha */}
          <label className="block text-left text-gray-700 mb-1">Fecha:</label>
          <input
            type="date"
            className="border border-purple-300 rounded-lg px-3 py-2 w-full mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          {/* Selección de hora */}
          <label className="block text-left text-gray-700 mb-1">Hora:</label>
          <select
            className="border border-purple-300 rounded-lg px-3 py-2 w-full mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
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
            onClick={handleConfirm}
            className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors duration-300"
          >
            Confirmar turno
          </button>
        </div>
      )}

      {step === "form" && (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
            Completa tus datos
          </h2>

          <p className="text-sm text-gray-600 text-center mb-4">
            Turno seleccionado: <br />
            <span className="font-semibold text-purple-700">{selectedDate}</span> a las{" "}
            <span className="font-semibold text-purple-700">{selectedTime}</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nombre"
              className="border border-purple-300 rounded-lg px-3 py-2 w-full"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              className="border border-purple-300 rounded-lg px-3 py-2 w-full"
              value={formData.apellido}
              onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-purple-300 rounded-lg px-3 py-2 w-full"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="border border-purple-300 rounded-lg px-3 py-2 w-full"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              required
            />
            <textarea
              placeholder="Motivo de la consulta"
              className="border border-purple-300 rounded-lg px-3 py-2 w-full"
              value={formData.motivo}
              onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
              required
            />

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors duration-300"
            >
              Enviar solicitud
            </button>

            <button
              type="button"
              onClick={() => setStep("calendar")}
              className="text-purple-600 mt-2 underline text-sm"
            >
              Volver al calendario
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
