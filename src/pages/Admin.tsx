// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Calendar from "react-calendar"; // npm install react-calendar
// import "react-calendar/dist/Calendar.css";

// type Cita = {
//   id: string;
//   nombre: string;
//   apellido: string;
//   dni: string;
//   telefono: string;
//   motivo: string;
//   fecha: string;
//   hora: string;
//   es_nuevo: boolean;
// };

// export default function AdminCitas() {
//   const [citas, setCitas] = useState<Cita[]>([]);
//   const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>(new Date());
//   const navigate = useNavigate();
//   const [dniBusqueda, setDniBusqueda] = useState("");

//   // 🔹 Obtener citas desde el backend
//   const fetchCitas = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/appointments");
//       const data = await res.json();
//       setCitas(data);
//     } catch (error) {
//       console.error("Error al obtener citas:", error);
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

//   // 🔹 Filtrar citas por la fecha seleccionada
//   const citasDelDia = citas.filter((cita) => {
//     const fechaCita = cita.fecha.split("T")[0];
//     const fechaSeleccionadaISO = fechaSeleccionada.toISOString().split("T")[0];
//     return fechaCita === fechaSeleccionadaISO;
//   });


//   // listar clientes



//   return (
//     <section className="max-w-6xl mx-auto min-h-screen bg-gray-50 flex flex-col lg:flex-row p-6 pt-16">
//       {/* Panel Izquierdo: Lista de Citas */}
//       <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-blue-700 mb-2">
//           Citas para hoy (
//           {new Date().toLocaleDateString("es-AR", {
//             day: "2-digit",
//             month: "2-digit",
//             year: "numeric",
//           })}
//           )
//         </h1>

//         <button
//           onClick={() => navigate("/calendario")}
//           className="mb-6 bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-200 transition"
//         >
//           Ver Agenda Completa
//         </button>

//         {citasDelDia.length > 0 ? (
//           <ul className="space-y-4">
//             {citasDelDia.map((cita) => (
//               <li
//                 key={cita.id}
//                 className="flex justify-between items-center border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
//               >
//                 <div>
//                   <p className="font-semibold text-gray-800">
//                     {cita.nombre} {cita.apellido} —{" "}
//                     <span className="text-blue-600">
//                       {cita.hora.slice(0, 5)}
//                     </span>
//                   </p>
//                   <p className="text-gray-500 text-sm">{cita.motivo}</p>
//                   {cita.es_nuevo && (
//                     <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1 inline-block">
//                       🆕 Paciente nuevo
//                     </span>
//                   )}
//                 </div>
//                   <button
//                   onClick={() =>
//                     navigate(
//                       cita.es_nuevo
//                         ? `/expediente/${cita.dni}/crear`
//                         : `/expediente/${cita.dni}`,
//                       { state: { cita } }
//                     )
//                   }
//                   className="text-blue-600 hover:underline text-sm"
//                 >
//                   {cita.es_nuevo ? "Crear expediente" : "Abrir expediente"}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 text-center">
//             No hay citas para esta fecha.
//           </p>
//         )}
//       </div>

//       {/* Panel Derecho: Calendario + Recordatorios */}
//       <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 bg-white rounded-2xl shadow-xl p-8">
//         <div className="mb-6">
//           <Calendar
//             onChange={(date) => setFechaSeleccionada(date as Date)}
//             value={fechaSeleccionada}
//           />
//         </div>

//         <div>
//           <h2 className="text-lg font-semibold text-gray-800 mb-3">
//     Buscar paciente por DNI
//   </h2>

//   <input
//     type="text"
//     placeholder="Ingrese DNI del paciente"
//     value={dniBusqueda}
//     onChange={(e) => setDniBusqueda(e.target.value)}
//     className="w-full border border-gray-300 rounded-lg p-2 mb-3"
//   />

//   <button
//   onClick={async () => {
//   if (!dniBusqueda) return alert("Ingrese un DNI");

//   try {
//     const res = await fetch(
//       `http://localhost:5000/api/patients/${dniBusqueda}`
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       alert("Paciente no registrado ❌");
//       return;
//     }

//     if (!data.tieneExpediente) {
//       alert("Este paciente NO tiene expediente ❌");
//       return;
//     }

//     navigate(`/expediente/${dniBusqueda}`);

//   } catch (error) {
//     console.error(error);
//     alert("Error al buscar paciente");
//   }
// }}
//     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//   >
//     Buscar paciente
//   </button>

// <button
//   onClick={() => navigate("/pacientes")}
//   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-3"
// >
//   Lista de pacientes
// </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// type Cita = {
//   id: string;
//   nombre: string;
//   apellido: string;
//   dni: string;
//   telefono: string;
//   motivo: string;
//   fecha: string;
//   hora: string;
//   es_nuevo: boolean;
// };

// export default function AdminCitas() {
//   const [citas, setCitas] = useState<Cita[]>([]);
//   const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>(new Date());
//   const [totalPacientes, setTotalPacientes] = useState(0);
//   const navigate = useNavigate();

//   const fetchCitas = async () => {
//     const res = await fetch("http://localhost:5000/api/appointments");
//     const data = await res.json();
//     setCitas(data);
//   };

//   const fetchPacientes = async () => {
//     const res = await fetch("http://localhost:5000/api/patients");
//     const data = await res.json();
//     setTotalPacientes(data.length);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       navigate("/login");
//       return;
//     }
//     fetchCitas();
//     fetchPacientes();
//   }, [navigate]);

//   const citasDelDia = citas.filter((cita) => {
//     const fechaCita = cita.fecha.split("T")[0];
//     const fechaSeleccionadaISO = fechaSeleccionada.toISOString().split("T")[0];
//     return fechaCita === fechaSeleccionadaISO;
//   });

//   const pacientesNuevos = citas.filter(c => c.es_nuevo).length;

//   return (
//     <section className="min-h-screen bg-white p-6">
      
//       {/* HEADER */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-purple-700">
//           Panel Administrativo
//         </h1>
//         <p className="text-gray-500">
//           Gestión de citas y pacientes
//         </p>
//       </div>

//       {/* CARDS ESTADÍSTICAS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
//         <div className="bg-purple-100 p-6 rounded-2xl shadow">
//           <p className="text-sm text-gray-600">Citas del día</p>
//           <p className="text-3xl font-bold text-purple-700">
//             {citasDelDia.length}
//           </p>
//         </div>

//         <div className="bg-yellow-100 p-6 rounded-2xl shadow">
//           <p className="text-sm text-gray-600">Pacientes registrados</p>
//           <p className="text-3xl font-bold text-yellow-600">
//             {totalPacientes}
//           </p>
//         </div>

//         <div className="bg-purple-50 p-6 rounded-2xl shadow">
//           <p className="text-sm text-gray-600">Pacientes nuevos</p>
//           <p className="text-3xl font-bold text-purple-600">
//             {pacientesNuevos}
//           </p>
//         </div>

//       </div>

//       {/* ALERTA */}
//       {pacientesNuevos > 0 && (
//         <div className="bg-yellow-200 border border-yellow-400 text-yellow-900 p-4 rounded-xl mb-6">
//           ⚠ Hay pacientes nuevos que necesitan crear expediente.
//         </div>
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//         {/* LISTA DE CITAS */}
//         <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-6">
//           <h2 className="text-xl font-semibold text-purple-700 mb-4">
//             Citas del {fechaSeleccionada.toLocaleDateString("es-AR")}
//           </h2>

//           {citasDelDia.length > 0 ? (
//             <div className="space-y-4">
//               {citasDelDia.map((cita) => (
//                 <div
//                   key={cita.id}
//                   className="border rounded-xl p-4 hover:shadow-md transition"
//                 >
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         {cita.nombre} {cita.apellido}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {cita.motivo}
//                       </p>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-purple-600 font-bold">
//                         {cita.hora.slice(0, 5)}
//                       </p>

//                       <button
//                         onClick={() =>
//                           navigate(
//                             cita.es_nuevo
//                               ? `/expediente/${cita.dni}/crear`
//                               : `/expediente/${cita.dni}`
//                           )
//                         }
//                         className="text-sm text-purple-700 hover:underline"
//                       >
//                         {cita.es_nuevo ? "Crear expediente" : "Abrir expediente"}
//                       </button>
//                     </div>
//                   </div>

//                   {cita.es_nuevo && (
//                     <span className="inline-block mt-2 text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">
//                       🆕 Paciente nuevo
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">
//               No hay citas para esta fecha.
//             </p>
//           )}
//         </div>

//         {/* CALENDARIO */}
//         <div className="bg-white shadow-xl rounded-2xl p-6">
//           <h2 className="text-lg font-semibold text-purple-700 mb-4">
//             Calendario
//           </h2>

//           <Calendar
//             onChange={(date) => setFechaSeleccionada(date as Date)}
//             value={fechaSeleccionada}
//             tileClassName={({ date }) => {
//               const dateStr = date.toISOString().split("T")[0];
//               const tieneCitas = citas.some(
//                 (c) => c.fecha.split("T")[0] === dateStr
//               );

//               if (tieneCitas) {
//                 return "bg-purple-200 rounded-lg";
//               }
//             }}
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
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
  const [totalPacientes, setTotalPacientes] = useState(0);
  const [dniBusqueda, setDniBusqueda] = useState("");
  const navigate = useNavigate();

  const fetchCitas = async () => {
    const res = await fetch("http://localhost:5000/api/appointments");
    const data = await res.json();
    setCitas(data);
  };

  const fetchPacientes = async () => {
    const res = await fetch("http://localhost:5000/api/patients");
    const data = await res.json();
    setTotalPacientes(data.length);
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCitas();
    fetchPacientes();
  }, [navigate]);

  const citasDelDia = citas.filter((cita) => {
    const fechaCita = cita.fecha.split("T")[0];
    const fechaSeleccionadaISO = fechaSeleccionada.toISOString().split("T")[0];
    return fechaCita === fechaSeleccionadaISO;
  });

  const pacientesNuevos = citas.filter(c => c.es_nuevo).length;

  return (
    <section className="min-h-screen bg-white p-6 pt-24">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-700">
          Panel Administrativo
        </h1>
        <p className="text-gray-500">
          Gestión de citas y pacientes
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-purple-100 p-6 rounded-2xl shadow">
          <p className="text-sm text-gray-600">Citas del día</p>
          <p className="text-3xl font-bold text-purple-700">
            {citasDelDia.length}
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-2xl shadow">
          <p className="text-sm text-gray-600">Pacientes registrados</p>
          <p className="text-3xl font-bold text-yellow-600">
            {totalPacientes}
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-2xl shadow">
          <p className="text-sm text-gray-600">Pacientes nuevos</p>
          <p className="text-3xl font-bold text-purple-600">
            {pacientesNuevos}
          </p>
        </div>

      </div>

      {/* ALERTA */}
      {pacientesNuevos > 0 && (
        <div className="bg-yellow-200 border border-yellow-400 text-yellow-900 p-4 rounded-xl mb-6">
          ⚠ Hay pacientes nuevos que necesitan crear expediente.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LISTA CITAS */}
        <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Citas del {fechaSeleccionada.toLocaleDateString("es-AR")}
          </h2>

          {citasDelDia.length > 0 ? (
            <div className="space-y-4">
              {citasDelDia.map((cita) => (
                <div
                  key={cita.id}
                  className="border rounded-xl p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {cita.nombre} {cita.apellido}
                      </p>
                      <p className="text-sm text-gray-500">
                        {cita.motivo}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-purple-600 font-bold">
                        {cita.hora.slice(0, 5)}
                      </p>

                      <button
                        onClick={() =>
                          navigate(
                            cita.es_nuevo
                              ? `/expediente/${cita.dni}/crear`
                              : `/expediente/${cita.dni}`
                          )
                        }
                        className="text-sm text-purple-700 hover:underline"
                      >
                        {cita.es_nuevo ? "Crear expediente" : "Abrir expediente"}
                      </button>
                    </div>
                  </div>

                  {cita.es_nuevo && (
                    <span className="inline-block mt-2 text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">
                      🆕 Paciente nuevo
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No hay citas para esta fecha.
            </p>
          )}
        </div>

        {/* PANEL DERECHO */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
          
          <h2 className="text-lg font-semibold text-purple-700">
            Calendario
          </h2>

          <Calendar
            onChange={(date) => setFechaSeleccionada(date as Date)}
            value={fechaSeleccionada}
            tileClassName={({ date }) => {
              const dateStr = date.toISOString().split("T")[0];
              const tieneCitas = citas.some(
                (c) => c.fecha.split("T")[0] === dateStr
              );
              if (tieneCitas) return "bg-purple-200 rounded-lg";
            }}
          />

          {/* BUSCADOR DNI */}
          <div>
            <h3 className="text-md font-semibold text-purple-700 mt-6 mb-2">
              Buscar paciente por DNI
            </h3>

            <input
              type="text"
              placeholder="Ingrese DNI"
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
                  const data = await res.json();

                  if (!res.ok) {
                    alert("Paciente no registrado ❌");
                    return;
                  }

                  if (!data.tieneExpediente) {
                    alert("Este paciente NO tiene expediente ❌");
                    return;
                  }

                  navigate(`/expediente/${dniBusqueda}`);
                } catch (error) {
                  alert("Error al buscar paciente");
                }
              }}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Buscar paciente
            </button>

            <button
              onClick={() => navigate("/pacientes")}
              className="w-full bg-yellow-400 text-purple-900 py-2 rounded-lg hover:bg-yellow-500 transition mt-3"
            >
              Lista de pacientes
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}