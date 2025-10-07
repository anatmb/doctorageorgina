//  import { useState } from "react";

//  export default function Navbar() {
//    const [open, setOpen] = useState(false);

//    return (
//      <header className="fixed top-0 w-full bg-white shadow-md z-50">
//        <div className="flex justify-between items-center p-4">
//          <h1 className="text-lg md:text-xl font-bold text-purple-700">
//            Dra. Georgina Meléndez
//          </h1>

//          {/* Menú Desktop */}
//          <nav className="hidden md:flex gap-6 text-gray-700">
//            <a href="#hero" className="hover:text-purple-700">Inicio</a>
//            <a href="#services" className="hover:text-purple-700">Servicios</a>
//            <a href="#about" className="hover:text-purple-700">Sobre mí</a>
//            <a href="#contact" className="hover:text-purple-700">Contacto</a>
//          </nav>

//          {/* Botón Desktop */}
//          <button className="hidden md:block bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
//            Agenda tu cita
//          </button>

//          {/* Botón Hamburguesa */}
//          <button
//            onClick={() => setOpen(!open)}
//            className="md:hidden text-purple-700 focus:outline-none"
//          >
//            ☰
//          </button>
//        </div>

//        {/* Menú Mobile */}
//        {open && (
//          <nav className="md:hidden flex flex-col items-center bg-purple-50 py-4 gap-4 text-gray-700">
//            <a href="#hero" onClick={() => setOpen(false)}>Inicio</a>
//            <a href="#services" onClick={() => setOpen(false)}>Servicios</a>
//            <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
//            <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
//            <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
//              Agenda tu cita
//            </button>
//          </nav>
//        )}
//      </header>
//    );
//  }
import { useNavigate } from "react-router-dom";

 import { useState } from "react";

 export default function Navbar() {
  const navigate = useNavigate();
   const [open, setOpen] = useState(false);

   return (
     <header className="fixed top-0 w-full bg-white shadow-md z-50">
       {/* Contenedor centrado con el mismo ancho que el hero */}
       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
         <h1 className="text-lg md:text-xl font-bold text-purple-700">
           Dra. Georgina Meléndez
         </h1>

         {/* Menú Desktop */}
         <nav className="hidden md:flex gap-6 text-gray-700">
           <a href="#inicio" className="hover:text-purple-700 transition-colors">
             Inicio
           </a>
           <a href="#services" className="hover:text-purple-700 transition-colors">
             Servicios
           </a>
           <a href="#about" className="hover:text-purple-700 transition-colors">
             Sobre mí
           </a>
           <a href="#contact" className="hover:text-purple-700 transition-colors">
             Contacto
           </a>
         </nav>

         {/* Botón Desktop */}
         <button  onClick={() => navigate("/agenda")} className="hidden md:block bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
           Agenda tu cita
         </button>

         {/* Botón Hamburguesa (Mobile) */}
         <button
           onClick={() => setOpen(!open)}
           className="md:hidden text-purple-700 text-2xl focus:outline-none"
         >
           {open ? "✕" : "☰"}
         </button>
       </div>

       {/* Menú Mobile */}
       {open && (
         <nav className="md:hidden flex flex-col items-center bg-purple-50 py-4 gap-4 text-gray-700 shadow-md">
           <a
             href="#hero"
             onClick={() => setOpen(false)}
             className="hover:text-purple-700"
           >
             Inicio
           </a>
           <a
             href="#services"
             onClick={() => setOpen(false)}
             className="hover:text-purple-700"
           >
             Servicios
           </a>
           <a
             href="#about"
             onClick={() => setOpen(false)}
             className="hover:text-purple-700"
           >
             Sobre mí
           </a>
           <a
             href="#contact"
             onClick={() => setOpen(false)}
             className="hover:text-purple-700"
           >
             Contacto
           </a>
           <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
             Agenda tu cita
           </button>
         </nav>
       )}
     </header>
   );
 }
