// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-purple-700 text-white py-10 px-6">
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//         {/* Nombre */}
//         <div>
//           <h3 className="font-bold mb-2">Dra. Georgina Meléndez</h3>
//           <p className="text-sm md:text-base">
//             Cuidado integral femenino con profesionalismo y empatía.
//           </p>
//         </div>

//         {/* Contacto */}
//         <div>
//           <h3 className="font-bold mb-2">Contacto</h3>
//           <p className="text-sm md:text-base">📞 +51 929 269 415</p>
//           <p className="text-sm md:text-base">✉ consulta@dreamartinez.com</p>
//           <p className="text-sm md:text-base">📍 Perú / Lima</p>
//         </div>

//         {/* Horarios */}
//         <div>
//           <h3 className="font-bold mb-2">Horarios</h3>
//           <p className="text-sm md:text-base">Lunes - Viernes: 9:00 - 12:00</p>
//           <p className="text-sm md:text-base">Sábados: 9:00 - 14:00</p>
//           <p className="text-sm md:text-base">Domingos: Cerrado</p>
//           <p className="text-sm md:text-base">Cita de urgencia disponible</p>
//         </div>

//         {/* Redes sociales */}
//         <div>
//           <h3 className="font-bold mb-2">Sígueme</h3>
//           <div className="flex gap-4 justify-center lg:justify-start">
//             <a href="#" className="hover:text-gray-300">Instagram</a>
//           </div>
//         </div>
//       </div>

//       {/* Copy */}
//       <p className="text-center mt-6 text-xs md:text-sm">
//         © {new Date().getFullYear()} Dra. Georgina Meléndez. Todos los derechos reservados.
//       </p>
//     </footer>
//   );
// }

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram} from "@fortawesome/free-brands-svg-icons";

// export default function Footer() {
//   return (
//     <footer id="contact" className="w-full bg-purple-700 text-white py-10">
//       {/* Contenedor centrado */}
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Nombre */}
//           <div>
//             <h3 className="font-bold mb-2">Dra. Georgina Meléndez</h3>
//             <p className="text-sm md:text-base">
//               Cuidado integral femenino con profesionalismo y empatía.
//             </p>
//           </div>

//           {/* Contacto */}
//           <div>
//             <h3 className="font-bold mb-2">Contacto</h3>
//             <p className="text-sm md:text-base">📞 +51 929 269 415</p>
//             <p className="text-sm md:text-base">✉ consulta@dreamartinez.com</p>
//             <p className="text-sm md:text-base">📍 Perú / Lima</p>
//           </div>

//           {/* Horarios */}
//           <div>
//             <h3 className="font-bold mb-2">Horarios</h3>
//             <p className="text-sm md:text-base">Lunes - Viernes: 9:00 - 12:00</p>
//             <p className="text-sm md:text-base">Sábados: 9:00 - 14:00</p>
//             <p className="text-sm md:text-base">Domingos: Cerrado</p>
//             <p className="text-sm md:text-base">Cita de urgencia disponible</p>
//           </div>

//           {/* Redes sociales */}
//           <div>
//             <h3 className="font-bold mb-2">Sígueme</h3>
//             <div className="flex gap-4 justify-center lg:justify-start">
//               {/* <a href="#" className="hover:text-gray-300">Instagram</a> */}
//                 <a href="#" className="text-yellow-500 hover:text-yellow-600 text-2xl">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             </div>
//           </div>
//         </div>

//         {/* Copy */}
//         <p className="text-center mt-6 text-xs md:text-sm">
//           © {new Date().getFullYear()} Dra. Georgina Meléndez. Todos los derechos reservados.
//         </p>
//       </div>
//     </footer>
//   );
// }


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-purple-700 text-white py-14">
      
      {/* Contenedor alineado con el resto del sitio */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Nombre */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Dra. Georgina Meléndez
            </h3>

            <p className="text-sm md:text-base text-purple-100 leading-relaxed">
              Cuidado integral femenino con profesionalismo, experiencia y
              empatía para acompañarte en cada etapa de tu vida.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contacto
            </h3>

            <div className="space-y-2 text-sm md:text-base text-purple-100">
              <p>📞 +51 929 269 415</p>
              <p>✉ consulta@dreamartinez.com</p>
              <p>📍 Perú / Lima</p>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Horarios
            </h3>

            <div className="space-y-2 text-sm md:text-base text-purple-100">
              <p>Lunes - Viernes: 9:00 - 12:00</p>
              <p>Sábados: 9:00 - 14:00</p>
              <p>Domingos: Cerrado</p>
              <p className="text-yellow-400 font-medium">
                Citas de urgencia disponibles
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Sígueme
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="
                bg-white/10
                p-3
                rounded-full
                text-yellow-400
                hover:bg-white/20
                hover:text-yellow-300
                transition
                duration-300
                text-xl
                "
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-purple-500 mt-10 pt-6">

          <p className="text-center text-xs md:text-sm text-purple-200">
            © {new Date().getFullYear()} Dra. Georgina Meléndez. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}