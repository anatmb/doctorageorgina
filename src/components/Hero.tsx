// import {
//   faCalendarDays,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo1 from "../assets/img/logo1.jpeg";
// import logo2 from "../assets/img/logo2.jpeg";
// import logo3 from "../assets/img/logo3.jpeg";
// import logo4 from "../assets/img/logo4.jpg";
// import logo5 from "../assets/img/logo5.png";

// export default function Hero() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleScroll = (id: string) => {
//     // Si ya estás en la página principal
//     if (location.pathname === "/") {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // Si estás en otra página, primero vuelve a "/"
//       navigate("/", { replace: false });

//       // Espera un poco y luego hace scroll (para dar tiempo a montar el Home)
//       setTimeout(() => {
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300);
//     }
//   };

//   return (

//     <section id="inicio" className="bg-white py-16 w-full">
//       <div
//         className="relative bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/src/assets/img/fondo.png')", // 🔄 Usa aquí la ruta de tu imagen
//         }}
//       >
//         {/* Capa semitransparente para mejorar la legibilidad del texto */}
//         <div className="absolute inset-0 bg-white/60 lg:bg-white/50"></div>

//         {/* Contenido principal */}
//         <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10 px-6 py-20">
//           {/* --- Columna izquierda: texto --- */}
//           <div className="text-center lg:text-left z-10">
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//               Cuidado Integral Femenino con{" "}
//               <span className="text-purple-700">Profesionalismo</span> y{" "}
//               <span className="text-purple-700">Empatía</span>
//             </h1>

//             <p className="text-gray-700 mb-2 text-base sm:text-lg">
//               Ginecología y salud íntima con enfoque humano y atención
//               personalizada.
//             </p>

//             <div className="flex justify-center md:justify-start mb-4 gap-6 text-2xl">
//               <a href="#" className="text-yellow-400 hover:text-yellow-500">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a href="#" className="text-yellow-400 hover:text-yellow-500">
//                 <FontAwesomeIcon icon={faWhatsapp} />
//               </a>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
//               <button
//                 onClick={() => handleScroll("services")}
//                 className="gap-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
//               >
//                 <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
//                 Ver servicios
//               </button>
//               <button
//                 onClick={() => navigate("/agenda")}
//                 className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
//               >
//                 <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
//                 Agendar cita
//               </button>
//             </div>
//           </div>

//           {/* --- Columna derecha opcional (podés quitar si usás fondo completo) --- */}
//           <div className="hidden lg:flex justify-center">
//             {/* <img
//         src="/src/assets/img/hero.png"
//         alt="Cuidado Femenino"
//         className="max-w-sm"
//       /> */}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white pt-6 pb-8">
//         <div className="max-w-screen-xl mx-auto text-center px-4">
//           <h4 className="text-purple-700 pb-3 font-bold  text-lg mb-4 ">
//             Alianzas y Colaboraciones
//           </h4>
//           <div className="relative overflow-hidden">
//             {/* Contenedor animado */}
//             <div className="flex animate-scroll gap-16">
//               {[
//                 logo1,
//                 logo2,
//                 logo3,
//                 logo4,
//                 logo5,
//                 logo1,
//                 logo2,
//                 logo3,
//                 logo4,
//                 logo5,
//               ].map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logo}
//                   alt={`Logo ${i + 1}`}
//                   className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import logo1 from "../assets/img/logo1.jpeg";
import logo2 from "../assets/img/logo2.jpeg";
import logo3 from "../assets/img/logo3.jpeg";
import logo4 from "../assets/img/logo4.jpg";
import logo5 from "../assets/img/logo5.png";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <section id="inicio" className="bg-white py-16 w-full">

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/img/fondo.png')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* CONTENEDOR alineado con dashboard */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6 py-24">

          {/* TEXTO */}
          <div className="text-center lg:text-left z-10">

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Cuidado Integral Femenino con{" "}
              <span className="text-purple-700">Profesionalismo</span> y{" "}
              <span className="text-purple-700">Empatía</span>
            </h1>

            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              Ginecología y salud íntima con enfoque humano, tecnología moderna
              y atención personalizada para cada paciente.
            </p>

            {/* REDES */}
            <div className="flex justify-center lg:justify-start mb-6 gap-6 text-2xl">
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-500 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-500 transition"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <button
                onClick={() => handleScroll("services")}
                className="bg-yellow-400 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-yellow-500 transition"
              >
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                Ver servicios
              </button>

              <button
                onClick={() => navigate("/agenda")}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-purple-700 transition"
              >
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                Agendar cita
              </button>

            </div>
          </div>

          {/* ESPACIO DERECHO */}
          <div className="hidden lg:flex justify-center"></div>

        </div>
      </div>

      {/* LOGOS */}
      <div className="bg-white pt-10 pb-10">

        <div className=" max-w-7xl mx-auto text-center px-6">

          <h4 className="text-purple-700 font-semibold text-lg mb-6">
            Alianzas y Colaboraciones
          </h4>

          <div className="relative overflow-hidden">

            <div className="flex animate-scroll gap-16 items-center">

              {[
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
              ].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
                />
              ))}

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}