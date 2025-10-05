// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center px-6"
//       style={{ backgroundImage: "url('/src/assets/img/hero-bg.png')" }}
//     >
//       <h2 className="text-3xl text-purple-700 md:text-5xl font-bold mb-4 drop-shadow-lg">
//         Cuidado Integral Femenino con Profesionalismo y Empatía
//       </h2>
//       <p className="mb-6 text-base text-purple-600 md:text-xl">
//         Tu bienestar es nuestra prioridad en cada etapa de tu vida.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4">
//         <button className="bg-purple-700 px-6 py-3 rounded-3xl hover:bg-purple-800">
//           📆 Reservar Consulta
//         </button>
//         <button className="border border-purple-700 text-purple-700 px-6 py-3 rounded-3xl hover:bg-white hover:text-purple-700">
//           📩 Conocer Más
//         </button>
//       </div>
//     </section>
//   );
// }




// export default function Hero() {
//   return (
//     <section className="bg-white mt-16">
//       {/* Contenedor principal */}
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-12">
        
//         {/* Imagen izquierda */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src="/src/assets/img/foto-hero.png"
//             alt="Dra. Georgina Meléndez"
//             className="rounded-xl shadow-lg object-cover w-full sm:w-4/5 md:w-full max-w-sm md:max-w-none"
//           />
//         </div>

//         {/* Contenido derecho */}
//         <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700 leading-snug">
//             Cuidado Integral Femenino con Profesionalismo y Empatía
//           </h2>
//           <p className="text-gray-700 text-base sm:text-lg">
//             Tu bienestar es nuestra prioridad en cada etapa de tu vida.
//           </p>

//           {/* Botones */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
//             <button className="flex items-center justify-center gap-2 bg-purple-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-purple-800 transition w-full sm:w-auto">
//               <i className="fa-solid fa-calendar-days"></i>
//               Agenda tu cita
//             </button>
//             <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-yellow-600 transition w-full sm:w-auto">
//               <i className="fa-solid fa-location-dot"></i>
//               Ubicación
//             </button>
//           </div>

//           {/* Íconos redes */}
//           <div className="flex justify-center md:justify-start gap-5 pt-3">
//             <a href="#" className="text-yellow-500 hover:text-yellow-600 text-2xl">
//            <i className="fa-brands fa-instagram text-yellow-500 hover:text-yellow-600 text-2xl"></i>
//             </a>
//             <a href="#" className="text-yellow-500 hover:text-yellow-600 text-2xl">
//               <i className="fa-brands fa-whatsapp"></i>
//             </a>
//           </div>

//           {/* Promo especial */}
//           <div className="border border-purple-200 rounded-lg shadow-md p-6 bg-purple-50 max-w-xs sm:max-w-sm mx-auto md:mx-0">
//             <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
//               Promo Especial
//             </p>
//             <h3 className="text-xl font-bold text-purple-700 mt-1">
//               Colposcopía + Consulta
//             </h3>
//             <p className="text-3xl font-bold text-gray-800 mt-3">$450</p>
//             <button className="mt-5 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
//               Ver detalles
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Alianzas */}
//       <div className="bg-white border-t border-yellow-400 py-6">
//         <div className="max-w-6xl mx-auto text-center px-4">
//           <h4 className="text-purple-700 font-semibold text-lg mb-4">
//             Nuestras Alianzas:
//           </h4>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-500">
//             <span>logo 1</span>
//             <span>logo 1</span>
//             <span>logo 1</span>
//             <span>logo 1</span>
//             <span>logo 1</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className="bg-white mt-16">
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-12">
        
        {/* Imagen izquierda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/src/assets/img/foto-hero.png"
            alt="Dra. Georgina Meléndez"
            className="rounded-xl shadow-lg object-cover w-full sm:w-4/5 md:w-full max-w-sm md:max-w-none"
          />
        </div>

        {/* Contenido derecho */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700 leading-snug">
            Cuidado Integral Femenino con Profesionalismo y Empatía
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Tu bienestar es nuestra prioridad en cada etapa de tu vida.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-purple-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-purple-800 transition w-full sm:w-auto">
              <FontAwesomeIcon icon={faCalendarDays} />
              Agenda tu cita
            </button>
            <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-yellow-600 transition w-full sm:w-auto">
              <FontAwesomeIcon icon={faLocationDot} />
              Contáctame
            </button>
          </div>

          {/* Íconos redes */}
           <div className="flex justify-center md:justify-start gap-5 pt-3">
            <a href="#" className="text-yellow-500 hover:text-yellow-600 text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-600 text-2xl">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a> 
          </div> 

          {/* Promo especial */}
          <div className="border border-purple-200 rounded-lg shadow-md p-6 bg-purple-50 w-full md:mx-0">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Promo Especial
            </p>
            <h3 className="text-xl font-bold text-purple-700 mt-1">
              Colposcopía + Consulta
            </h3>
            <p className="text-3xl font-bold text-gray-800 mt-3">$450</p>
            <button className="mt-5 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      {/* Alianzas */}
      <div className="bg-white border-t border-yellow-400 py-6">
        {/* <div className="max-w-6xl mx-auto text-center px-4">
          <h4 className="text-purple-700 font-semibold text-lg mb-4">
            Nuestras Alianzas:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-500">
            <span>logo 1</span>
            <span>logo 1</span>
            <span>logo 1</span>
            <span>logo 1</span>
            <span>logo 1</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
