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

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-purple-700 text-white py-10">
      {/* Contenedor centrado */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Nombre */}
          <div>
            <h3 className="font-bold mb-2">Dra. Georgina Meléndez</h3>
            <p className="text-sm md:text-base">
              Cuidado integral femenino con profesionalismo y empatía.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold mb-2">Contacto</h3>
            <p className="text-sm md:text-base">📞 +51 929 269 415</p>
            <p className="text-sm md:text-base">✉ consulta@dreamartinez.com</p>
            <p className="text-sm md:text-base">📍 Perú / Lima</p>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-bold mb-2">Horarios</h3>
            <p className="text-sm md:text-base">Lunes - Viernes: 9:00 - 12:00</p>
            <p className="text-sm md:text-base">Sábados: 9:00 - 14:00</p>
            <p className="text-sm md:text-base">Domingos: Cerrado</p>
            <p className="text-sm md:text-base">Cita de urgencia disponible</p>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-bold mb-2">Sígueme</h3>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>

        {/* Copy */}
        <p className="text-center mt-6 text-xs md:text-sm">
          © {new Date().getFullYear()} Dra. Georgina Meléndez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
