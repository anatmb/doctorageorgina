import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import agendaImage from "../assets/img/Dra. Melendez.png"; // ajusta la ruta a tu imagen

export default function Agenda() {
  const [step, setStep] = useState<"calendar" | "form">("calendar");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [dni, setDni] = useState(""); // ✅ NUEVO estado para el DNI
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    motivo: "",
  });

  const [busySlots, setBusySlots] = useState<{ fecha: string; hora: string }[]>(
    []
  );

  // Confirmar fecha y hora
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

  // Enviar datos al backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newAppointment = {
      dni, // ✅ agregamos el DNI al objeto enviado
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      motivo: formData.motivo,
      fecha: selectedDate,
      hora: selectedTime,
    };

    console.log("Datos enviados al backend:", newAppointment);

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAppointment),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Cita guardada correctamente ✅");
        setStep("calendar");
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          motivo: "",
        });
        setDni(""); // ✅ limpiar DNI
        setSelectedDate("");
        setSelectedTime("");
      } else {
        alert(data.message || "Error al guardar la cita ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Error al guardar la cita ❌");
    }
  };
type BusySlot = {
  fecha: string;
  hora: string;
};

useEffect(() => {
  const fetchBusySlots = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments/busy");
      const data: BusySlot[] = await res.json();

      const formatted = data.map((slot: BusySlot) => ({
        fecha: slot.fecha.split("T")[0],
        hora: slot.hora.slice(0, 5),
      }));

      setBusySlots(formatted);
    } catch (error) {
      console.error("Error al cargar horarios ocupados:", error);
    }
  };

  fetchBusySlots();
}, []);




const isWeekend = (dateString: string) => {
  const [year, month, day] = dateString.split("-").map(Number);

  // Construir fecha en UTC para evitar cambios por zona horaria
  const date = new Date(Date.UTC(year, month - 1, day));

  const dayOfWeek = date.getUTCDay(); // 0 = domingo, 6 = sábado

  return dayOfWeek === 0 || dayOfWeek === 6;
};



  return (
    <section className="h-screen flex flex-col lg:flex-row">
      {/* --- Left: Formulario / Calendario --- */}
      <div className="flex-1 flex items-center justify-center bg-purple-400 p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md">
          {/* Paso 1: Calendario */}
          {step === "calendar" && (
            <>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-purple-600 text-4xl mb-3 mx-auto"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Selecciona tu turno
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                Elige el día y la hora disponible para tu consulta
              </p>

              <label className="block text-left text-gray-700 mb-1">
                Fecha:
              </label>
          <input
  type="date"
  className="border border-purple-300 rounded-lg px-3 py-2 w-full mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
  value={selectedDate}
  onChange={(e) => {
    const value = e.target.value;

    if (isWeekend(value)) {
      alert("No se pueden seleccionar fines de semana ❌");
      return;
    }

    setSelectedDate(value);
    setSelectedTime("");
  }}
/>

              <label className="block text-left text-gray-700 mb-1">
                Hora:
              </label>
              <select
                className="border border-purple-300 rounded-lg px-3 py-2 w-full mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Seleccionar hora</option>

                {[
                  "08:00",
                  "09:00",
                  "10:00",
                  "11:00",
                  "14:00",
                  "15:00",
                  "16:00",
                  "17:00",
                ].map((hour) => {
                  const isBusy = busySlots.some(
                    (slot) => slot.fecha === selectedDate && slot.hora === hour
                  );

                  return (
                    <option key={hour} value={hour} disabled={isBusy}>
                      {hour} {isBusy ? "⛔ Ocupado" : ""}
                    </option>
                  );
                })}
              </select>

              {selectedDate &&
                busySlots.filter((slot) => slot.fecha === selectedDate)
                  .length === 8 && (
                  <p className="text-red-600 text-sm">
                    No quedan horarios disponibles en esta fecha ❌
                  </p>
                )}

              <button
                onClick={handleConfirm}
                className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors duration-300"
              >
                Confirmar turno
              </button>
            </>
          )}

          {/* Paso 2: Formulario */}
          {step === "form" && (
            <>
              <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                Completa tus datos
              </h2>
              <p className="text-sm text-gray-600 text-center mb-4">
                Turno seleccionado:{" "}
                <span className="font-semibold text-purple-700">
                  {selectedDate}
                </span>{" "}
                a las{" "}
                <span className="font-semibold text-purple-700">
                  {selectedTime}
                </span>
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="DNI"
                  className="border border-purple-300 rounded-lg px-3 py-2 w-full"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Nombre"
                  className="border border-purple-300 rounded-lg px-3 py-2 w-full"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="border border-purple-300 rounded-lg px-3 py-2 w-full"
                  value={formData.apellido}
                  onChange={(e) =>
                    setFormData({ ...formData, apellido: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-purple-300 rounded-lg px-3 py-2 w-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="border border-purple-300 rounded-lg px-3 py-2 w-full"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  required
                />
                <textarea
                  placeholder="Motivo de la consulta"
                  className="border border-purple-300 rounded-lg px-3 py-2 w-full"
                  value={formData.motivo}
                  onChange={(e) =>
                    setFormData({ ...formData, motivo: e.target.value })
                  }
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
            </>
          )}
        </div>
      </div>

      {/* --- Right: Imagen solo desktop --- */}
      <div
        className="hidden lg:flex lg:flex-1 h-screen"
        style={{
          backgroundImage: `url(${agendaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
}
