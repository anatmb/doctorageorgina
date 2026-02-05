import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Paciente = {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  email: string;
};

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const navigate = useNavigate();

  // 🔹 Traer pacientes
  const fetchPacientes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/patients");
      const data = await res.json();
      setPacientes(data);
    } catch (error) {
      console.error("Error al traer pacientes:", error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  // 🔴 Eliminar paciente
  const eliminarPaciente = async (dni: string) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este paciente?"
    );
    if (!confirmar) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/patients/${dni}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        alert("Error al eliminar");
        return;
      }

      // Actualiza la tabla sin recargar
      setPacientes((prev) => prev.filter((p) => p.dni !== dni));
    } catch (error) {
      console.error(error);
    }
  };

  // 🔵 Ver expediente
  const verExpediente = (dni: string) => {
    navigate(`/expediente/${dni}`);
  };

  // 🟡 Modificar paciente
  const modificarPaciente = (dni: string) => {
    navigate(`/paciente/editar/${dni}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Pacientes</h1>

      <table className="w-full border text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Apellido</th>
            <th className="p-2 border">DNI</th>
            <th className="p-2 border">Teléfono</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Expediente</th>
            <th className="p-2 border">Modificar</th>
            <th className="p-2 border">Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="p-2 border">{p.nombre}</td>
              <td className="p-2 border">{p.apellido}</td>
              <td className="p-2 border">{p.dni}</td>
              <td className="p-2 border">{p.telefono}</td>
              <td className="p-2 border">{p.email}</td>

              {/* VER EXPEDIENTE */}
              <td className="p-2 border">
                <button
                  onClick={() => verExpediente(p.dni)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                 👁
                </button>
              </td>

              {/* MODIFICAR */}
              <td className="p-2 border">
                <button
                  onClick={() => modificarPaciente(p.dni)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  ✏️
                </button>
              </td>

              {/* ELIMINAR */}
              <td className="p-2 border">
                <button
                  onClick={() => eliminarPaciente(p.dni)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
