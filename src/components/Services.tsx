//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import { faStethoscope, faBaby, faShieldHeart, faVenus, faFire, faScissors } from "@fortawesome/free-solid-svg-icons";

//  const services = [
//    { title: "Consulta General", desc: "Revisiones preventivas y diagnósticos especializados.", icon: faStethoscope  },
//    { title: "Control Prenatal", desc: "Acompañamiento completo durante el embarazo.",icon: faBaby },
//    { title: "Prevención", desc: "Programas de detección temprana de enfermedades.",icon: faShieldHeart },
//    { title: "Salud Reproductiva", desc: "Asesoramiento en planificación y fertilidad.", icon: faVenus  },
//    { title: "Menopausia", desc: "Tratamiento integral para cambios hormonales.",icon: faFire  },
//    { title: "Cirugía Mínima", desc: "Procedimientos con técnicas mínimamente invasivas.", icon: faScissors  },
//  ];

//  export default function Services() {
//    return (
//      <section id="services" className="py-16 bg-gray-50 text-center px-6">
//        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8">Nuestros Servicios</h2>
//        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//        {services.map((s, i) => (
//            <div key={i} className="bg-purple-100 shadow-md p-6 rounded-xl hover:shadow-lg">
//                <FontAwesomeIcon icon={s.icon} className="text-purple-600 text-3xl mb-3" />
//              <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-2">{s.title}</h3>
//              <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
//            </div>
//          ))}
//        </div>
//      </section>
//  );
//  }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faBaby, faShieldHeart, faVenus, faFire, faScissors } from "@fortawesome/free-solid-svg-icons";

const services = [
  { title: "Consulta General", desc: "Revisiones preventivas y diagnósticos especializados.", icon: faStethoscope },
  { title: "Control Prenatal", desc: "Acompañamiento completo durante el embarazo.", icon: faBaby },
  { title: "Prevención", desc: "Programas de detección temprana de enfermedades.", icon: faShieldHeart },
  { title: "Salud Reproductiva", desc: "Asesoramiento en planificación y fertilidad.", icon: faVenus },
  { title: "Menopausia", desc: "Tratamiento integral para cambios hormonales.", icon: faFire },
  { title: "Cirugía Mínima", desc: "Procedimientos con técnicas mínimamente invasivas.", icon: faScissors },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="bg-purple-100 shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <FontAwesomeIcon icon={s.icon} className="text-yellow-500 text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
