import doctorImg from "../assets/img/Dra. Melendez.png";

export default function About() {
  return (
    <section id="about" className="py-16 bg-purple-50 flex flex-col md:flex-row items-center gap-8 px-6">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Sobre la Dra. Georgina Meléndez</h2>
        <p className="text-gray-700 mb-4">
          Con más de 15 años de experiencia en ginecología y obstetricia,
          me dedico a brindar atención médica con un enfoque humano y personalizado.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Especialista en Ginecología y Obstetricia</li>
          <li>Certificada por el Colegio Médico Nacional</li>
          <li>Miembro de la Sociedad Venezolana y Peruana de Ginecología</li>
        </ul>
      </div>
      <div className="flex-1">
        <img src={doctorImg} alt="Dra. Elena Martínez" className="rounded-xl shadow-md" />
      </div>
    </section>
  );
}
