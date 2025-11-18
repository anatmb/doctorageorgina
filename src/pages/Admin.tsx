// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// // 🔹 Tipo para las citas
// type Cita = {
//   id: string;
//   nombre: string;
//   apellido: string;
//   dni: string | null; // Puede ser null
//   telefono: string;
//   motivo: string;
//   fecha: string;
//   hora: string;
// };

// export default function AdminCitas() {
//   const [citas, setCitas] = useState<Cita[]>([]);
//   const [searchDni, setSearchDni] = useState("");
//   const navigate = useNavigate();

//   // 🔹 Cargar citas desde el backend
//   const fetchCitas = () => {
//     fetch("http://localhost:5000/api/appointments")
//       .then((res) => res.json())
//       .then((data: Cita[]) => setCitas(data))
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }
//     fetchCitas();
//   }, [navigate]);

//   // 🔹 Cerrar sesión
//   // const logout = () => {
//   //   localStorage.removeItem("adminToken");
//   //   navigate("/login");
//   // };

//   // 🔹 Eliminar cita
//   const handleDelete = async (id: string) => {
//     if (window.confirm("¿Seguro que deseas eliminar esta cita?")) {
//       try {
//         const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
//           method: "DELETE",
//         });
//         if (res.ok) {
//           setCitas((prev: Cita[]) => prev.filter((c) => c.id !== id));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   // 🔹 Editar cita
//   const handleEdit = (id: string) => {
//     navigate(`/editar-cita/${id}`);
//   };

//   // 🔹 Filtrar citas por DNI (seguro si es null)
//   const citasFiltradas = citas.filter((cita) =>
//     (cita.dni || "").toLowerCase().includes(searchDni.toLowerCase())
//   );

//   // 🔹 Agrupar por fecha
//   const citasPorDia: Record<string, Cita[]> = citasFiltradas.reduce((acc, cita) => {
//     acc[cita.fecha] = acc[cita.fecha] || [];
//     acc[cita.fecha].push(cita);
//     return acc;
//   }, {} as Record<string, Cita[]>);

//   return (
//     <section className="min-h-screen bg-purple-50 p-6 md:p-20">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <h2 className="text-3xl font-bold text-purple-700">
//           📋 Administrar Citas
//         </h2>

//         <div className="flex gap-2 items-center">
//           <input
//             type="text"
//             placeholder="Buscar por DNI..."
//             value={searchDni}
//             onChange={(e) => setSearchDni(e.target.value)}
//             className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           {/* <button
//             onClick={logout}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//           >
//             Cerrar sesión
//           </button> */}
//         </div>
//       </div>

//       {Object.keys(citasPorDia).length === 0 ? (
//         <p className="text-gray-600 text-center">No hay citas registradas aún.</p>
//       ) : (
//         Object.keys(citasPorDia).map((fecha) => (
//           <div key={fecha} className="mb-6 bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-purple-600 mb-3 border-b border-purple-100 pb-2">
//               {fecha}
//             </h3>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-gray-700 border-collapse">
//                 <thead>
//                   <tr className="bg-purple-100">
//                     <th className="p-2 text-left">Hora</th>
//                     <th className="p-2 text-left">Nombre</th>
//                     <th className="p-2 text-left">DNI</th>
//                     <th className="p-2 text-left">Teléfono</th>
//                     <th className="p-2 text-left">Motivo</th>
//                     <th className="p-2 text-left">Acciones</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {citasPorDia[fecha].map((cita) => (
//                     <tr key={cita.id} className="border-t hover:bg-purple-50">
//                       <td className="p-2">{cita.hora}</td>
//                       <td className="p-2 font-medium">
//                         {cita.nombre} {cita.apellido}
//                       </td>
//                       <td className="p-2">{cita.dni || "-"}</td>
//                       <td className="p-2">{cita.telefono}</td>
//                       <td className="p-2">{cita.motivo}</td>
//                       <td className="p-2 flex gap-2">
//                         <button
//                           onClick={() => handleEdit(cita.id)}
//                           className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs"
//                         >
//                           Editar
//                         </button>
//                         <button
//                           onClick={() => handleDelete(cita.id)}
//                           className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
//                         >
//                           Eliminar
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))
//       )}
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// type Cita = {
//   id: string;
//   nombre: string;
//   apellido: string;
//   dni: string | null;
//   telefono: string;
//   motivo: string;
//   fecha: string;
//   hora: string;
// };

// export default function AdminCitas() {
//   const [citas, setCitas] = useState<Cita[]>([]);
//   const navigate = useNavigate();

//   const fetchCitas = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/appointments");
//       const data = await res.json();
//       setCitas(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }
//     fetchCitas();
//   }, [navigate]);

//   const citasHoy = citas.filter((c) => {
//     const hoy = new Date().toISOString().split("T")[0];
//     return c.fecha === hoy;
//   });

//   const pacientesNuevosMes = 12; // Puedes traerlo del backend
//   const consultasSemana = 28;
//   const citasCanceladasHoy = 1;

//   return (
//     <section className="min-h-screen bg-gray-50 p-6 md:p-10">
//       <h1 className="text-3xl font-bold text-purple-700 mb-8">
//         Panel de Administración
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Próximas Citas */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Próximas Citas para Hoy
//           </h2>
//           {citasHoy.length > 0 ? (
//             <ul className="space-y-2">
//               {citasHoy.map((cita) => (
//                 <li
//                   key={cita.id}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                   <div>
//                     <p className="font-medium">
//                       {cita.hora} - {cita.nombre} {cita.apellido}
//                     </p>
//                     <p className="text-sm text-gray-500">({cita.motivo})</p>
//                   </div>
//                   <button className="text-blue-600 text-sm font-medium hover:underline">
//                     Abrir Expediente
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 text-sm">No hay citas hoy.</p>
//           )}
//           <button className="mt-4 w-full bg-purple-100 text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-200 transition">
//             Ver Calendario Completo
//           </button>
//         </div>

//         {/* Acciones Rápidas */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Acciones Rápidas
//           </h2>
//           <div className="flex flex-col gap-3">
//             <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
//               Registrar Nuevo Paciente
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
//               Agendar Nueva Cita
//             </button>
//             <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
//               Buscar Paciente
//             </button>
//           </div>
//         </div>

//         {/* Resumen Semanal */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Resumen Semanal
//           </h2>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               Pacientes nuevos este mes:{" "}
//               <span className="text-blue-600 font-semibold">
//                 {pacientesNuevosMes}
//               </span>
//             </li>
//             <li>
//               Consultas realizadas esta semana:{" "}
//               <span className="text-green-600 font-semibold">
//                 {consultasSemana}
//               </span>
//             </li>
//             <li>
//               Citas canceladas hoy:{" "}
//               <span className="text-red-600 font-semibold">
//                 {citasCanceladasHoy}
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Alertas y Notificaciones */}
//         <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2 lg:col-span-3">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Alertas y Notificaciones
//           </h2>
//           <div className="space-y-3">
//             <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg">
//               3 pacientes tienen resultados de exámenes pendientes de revisión.
//             </div>
//             <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
//               Recordatorio: reunión de personal a las 14:00.
//             </div>
//             <div className="bg-pink-100 text-pink-800 p-3 rounded-lg">
//               Paciente Juan Pérez cumple años hoy 🎉
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// type Cita = {
//   id: string;
//   nombre: string;
//   apellido: string;
//   dni: string | null;
//   telefono: string;
//   motivo: string;
//   fecha: string; // formato ISO (YYYY-MM-DD o con T)
//   hora: string; // formato HH:mm:ss
//   es_nuevo: boolean;
// };

// export default function AdminCitas() {
//   const [citas, setCitas] = useState<Cita[]>([]);
//   const navigate = useNavigate();

//   // 🔹 Obtener todas las citas desde el backend
//   const fetchCitas = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/appointments");
//       const data = await res.json();
//       setCitas(data);
//     } catch (err) {
//       console.error("Error al cargar citas:", err);
//     }
//   };

//   // ✅ Este useEffect verifica el token y carga las citas
//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }
//     fetchCitas();
//   }, [navigate]);

//   // ⚠️ Este nuevo useEffect muestra una alerta si hay pacientes nuevos
//   useEffect(() => {
//     const nuevos = citas.filter((c) => c.es_nuevo);
//     if (nuevos.length > 0) {
//       alert(`👨‍⚕️ Hay ${nuevos.length} pacientes nuevos para revisar.`);
//     }
//   }, [citas]);

//   // 🕐 Filtrar las citas de HOY o próximas según la hora actual
//   const obtenerProximasCitas = () => {
//     const ahora = new Date();
//     const hoyStr = ahora.toLocaleDateString("en-CA");

//     return citas
//       .filter((c) => {
//         const fechaCita = (c.fecha || "").split("T")[0];
//         if (fechaCita < hoyStr) return false;

//         const fechaHoraCita = new Date(`${fechaCita}T${c.hora}`);
//         return fechaHoraCita >= ahora;
//       })
//       .sort((a, b) => {
//         const fechaHoraA = new Date(`${a.fecha.split("T")[0]}T${a.hora}`);
//         const fechaHoraB = new Date(`${b.fecha.split("T")[0]}T${b.hora}`);
//         return fechaHoraA.getTime() - fechaHoraB.getTime();
//       })
//       .slice(0, 3);
//   };

//   const proximasCitas = obtenerProximasCitas();

//   // 🔹 Datos fijos del dashboard
//   const pacientesNuevosMes = 12;
//   const consultasSemana = 28;
//   const citasCanceladasHoy = 1;

//   return (
//     <section className="min-h-screen bg-gray-50 p-6 md:p-10">
//       <h1 className="text-3xl font-bold text-purple-700 mb-8">
//         Panel de Administración
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* 📅 Próximas Citas */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Próximas Citas
//           </h2>

//           {proximasCitas.length > 0 ? (
//             <ul className="space-y-2">
//               {proximasCitas.map((cita) => (
//                 <li
//                   key={cita.id}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                   <div>
//                     <p className="font-medium">
//                       {cita.hora.slice(0, 5)} - {cita.nombre} {cita.apellido}
//                       {cita.es_nuevo && (
//                         <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
//                           🆕 Nuevo paciente
//                         </span>
//                       )}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {cita.motivo} ({cita.fecha.split("T")[0]})
//                     </p>
//                   </div>
//                   <button className="text-blue-600 text-sm font-medium hover:underline">
//                     {cita.es_nuevo ? "Crear expediente" : "Abrir expediente"}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 text-sm">
//               No hay citas próximas en este momento.
//             </p>
//           )}

//           <button
//             onClick={() => navigate("/calendario")}
//             className="mt-4 w-full bg-purple-100 text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-200 transition"
//           >
//             Ver Calendario Completo
//           </button>
//         </div>

//         {/* ⚡ Acciones Rápidas */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Acciones Rápidas
//           </h2>
//           <div className="flex flex-col gap-3">
//             <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
//               Registrar Nuevo Paciente
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
//               Agendar Nueva Cita
//             </button>
//             <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
//               Buscar Paciente
//             </button>
//           </div>
//         </div>

//         {/* 📊 Resumen Semanal */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Resumen Semanal
//           </h2>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               Pacientes nuevos este mes:{" "}
//               <span className="text-blue-600 font-semibold">
//                 {pacientesNuevosMes}
//               </span>
//             </li>
//             <li>
//               Consultas realizadas esta semana:{" "}
//               <span className="text-green-600 font-semibold">
//                 {consultasSemana}
//               </span>
//             </li>
//             <li>
//               Citas canceladas hoy:{" "}
//               <span className="text-red-600 font-semibold">
//                 {citasCanceladasHoy}
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* 🔔 Alertas y Notificaciones */}
//         <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2 lg:col-span-3">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Alertas y Notificaciones
//           </h2>
//           <div className="space-y-3">
//             <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg">
//               3 pacientes tienen resultados de exámenes pendientes de revisión.
//             </div>
//             <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
//               Recordatorio: reunión de personal a las 14:00.
//             </div>
//             <div className="bg-pink-100 text-pink-800 p-3 rounded-lg">
//               Paciente Juan Pérez cumple años hoy 🎉
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
                {/* 
                <button
                  onClick={() =>
                    navigate(`/expediente/${cita.dni}`, {
                      state: { cita },
                    })
                  }
                  className="text-blue-600 hover:underline text-sm"
                >
                  {cita.es_nuevo ? "Crear expediente" : "Abrir expediente"}
                </button>*/}

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
            Próximos Recordatorios
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>📋 Revisión de exámenes pendiente</li>
            <li>💬 Llamar a paciente Ana por resultados</li>
            <li>🕓 Reunión médica semanal — 14:00 hs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
