import doctorImg from "../assets/img/imagen-about.png";
import list1 from "../assets/img/list1.png";
import list2 from "../assets/img/list2.png";
import list3 from "../assets/img/list3.png";
export default function About() {
  return (
    <section id="about" className="py-16 bg-purple-100 flex flex-col md:flex-row items-center gap-8 px-6">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Dra. Georgina Meléndez</h2>
        <p className="text-black mb-4">
         Tengo más de 15 años de experiencia en ginecología y obstetricia, me dedico a brindar atención médica 
         de excelencia con un enfoque humano y personalizado.
        </p>

          <p className=" text-black mb-4">
          Mi compromiso es acompañar a cada mujer en su camino hacia el bienestar, ofreciendo un espacio 
          seguro donde la confianza y la empatía son fundamentales.
        </p>

        <ul className=" list-inside text-purple-700 ">
          <li className="flex items-center gap-2">
             <img src={list1} alt="check" className="w-5 h-5" />
            Especialista en Ginecología y Obstetricia</li>
          <li className="flex items-center gap-2">
            <img src={list2} alt="check" className="w-5 h-5" />
            Certificada por el Colegio Médico Nacional</li>
          <li className="flex items-center gap-2">
              <img src={list3} alt="check" className="w-5 h-5" />
            Miembro de la Sociedad Venezolana y Peruana de Ginecología</li>
        </ul>
      </div>
      <div className="flex-1">
        <img src={doctorImg} alt="Dra. Elena Martínez" className="rounded-xl shadow-md" />
      </div>
    </section>
  );
}
