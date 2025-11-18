import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VerExpediente() {
  const { dni } = useParams();
  const [expediente, setExpediente] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/expedientes/${dni}`)
      .then(res => res.json())
      .then(data => setExpediente(data))
      .catch(err => console.error(err));
  }, [dni]);

  if (!expediente) return <p>Cargando expediente...</p>;

  return (
    <div className="p-6 pt-11">
      <h1 className="text-2xl font-bold text-blue-700">
        holagggggggggggggggggggggggg
        {/* Expediente de {expediente.nombre} {expediente.apellido} */}
      </h1>

      <p>DNI: {dni}</p>

      {/* Aquí muestras exámenes, notas, consultas, etc */}
    </div>
  );
}
