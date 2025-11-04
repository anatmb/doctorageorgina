import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarioCitas() {
  const [citas, setCitas] = useState([]);

  // 🔄 Cargar citas desde tu backend
  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointments");
        const data = await response.json();

        // Transformar tus citas al formato que FullCalendar necesita
     const eventos = data.map((cita) => ({
  id: cita.id,
  title: `${cita.nombre} ${cita.apellido} - ${cita.motivo}`,
  start: `${cita.fecha.split("T")[0]}T${cita.hora}`,
  allDay: false,
  backgroundColor: cita.es_nuevo ? "#4ade80" : "#60a5fa", // verde si nuevo, azul si no
  borderColor: cita.es_nuevo ? "#22c55e" : "#3b82f6",
}));
        setCitas(eventos);
      } catch (error) {
        console.error("Error al cargar citas:", error);
      }
    };

    fetchCitas();
  }, []);

  return (
    <div className="p-7">
      <h2 className="text-xl font-bold mb-4 text-center">📅 Calendario de Citas</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek" // vista semanal con horarios
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={citas}
        locale="es" // en español
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        height="80vh"
      />
    </div>
  );
}
