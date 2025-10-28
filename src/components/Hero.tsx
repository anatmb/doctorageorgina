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
    // Si ya estás en la página principal
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estás en otra página, primero vuelve a "/"
      navigate("/", { replace: false });

      // Espera un poco y luego hace scroll (para dar tiempo a montar el Home)
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    // <section id="inicio" className="relative">
    //   {/* ✅ Versión APP (solo móvil) */}
    //   <div className="flex flex-col items-center text-center py-10 bg-purple-800 text-white rounded-b-3xl md:hidden">
    //     <div className="bg-purple-700 p-4 rounded-full w-24 h-24 flex items-center justify-center mb-4">
    //       <img
    //         src="/src/assets/img/foto-hero.png"
    //         alt="Dra. Georgina Meléndez"
    //         className="w-16 h-16 rounded-full object-cover"
    //       />
    //     </div>
    //     <h1 className="text-2xl font-semibold">Dra. Georgina Meléndez</h1>
    //     <p className="text-yellow-400 tracking-wide text-sm font-medium">
    //       GINECÓLOGA y OBSTETRA
    //     </p>

    //     <div className="flex flex-col gap-3 w-full px-8 mt-8">
    //       <button
    //         onClick={() => navigate("/agenda")}
    //         className="flex items-center justify-center gap-2 bg-yellow-500 text-purple-800 py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
    //       >
    //         <FontAwesomeIcon icon={faCalendarDays} />
    //         Turnos
    //       </button>
    //       <button  onClick={() => handleScroll("services")} className="flex items-center justify-center gap-2 bg-white text-purple-800 py-3 rounded-lg font-medium hover:bg-purple-100 transition">
    //         <FontAwesomeIcon icon={faLocationDot} />
    //         Servicios
    //       </button>
    //     </div>

    //     <div className="flex justify-center gap-6 pt-6 text-2xl">
    //       <a href="#" className="text-yellow-400 hover:text-yellow-500">
    //         <FontAwesomeIcon icon={faInstagram} />
    //       </a>
    //       <a href="#" className="text-yellow-400 hover:text-yellow-500">
    //         <FontAwesomeIcon icon={faWhatsapp} />
    //       </a>
    //     </div>
    //   </div>

    //   {/* ✅ Versión ESCRITORIO / TABLET */}
    //  <div className="relative overflow-hidden pt-20 lg:pt-0 pb-12 lg:pb-0">

    //     {/* === Fondo y Onda Diagonal (Nueva Estructura) === */}
    //     {/* El fondo púrpura-claro se extiende y se 'corta' diagonalmente */}
    //     <div className="absolute inset-0 bg-purple-100 transform -skew-y-3 origin-top-left">
    //       {/* Ajusta -skew-y-3 para la inclinación de la diagonal */}
    //     </div>

    //     {/* --- La Onda (SVG para una división suave) --- */}
    //     <svg
    //       className="absolute top-0 w-full h-auto text-white fill-current z-10"
    //       style={{ height: '100%', top: 0, left: 0 }}
    //       viewBox="0 0 100 100"
    //       preserveAspectRatio="none"
    //     >
    //       {/* Este path crea una onda suave y diagonal. Ajusta los puntos C y L para cambiar la forma. */}
    //       <path d="M0, 0 L100, 0 L100, 75 C75, 95 25, 90 0, 100 Z" transform="scale(1, -1) translate(0, -100)"/>
    //     </svg>

    //     {/* ---------------------------------------------------- */}
    //     {/* --- Contenido (Texto e Imagen) --- */}
    //     {/* ---------------------------------------------------- */}
    //     <div className="grid max-w-screen-xl px-6 pt-12 pb-12 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 lg:pt-28 relative z-20">

    //       {/* --- Columna izquierda: contenido --- */}
    //       <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
    //         <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-tight tracking-tight text-black md:text-5xl xl:text-6xl">
    //           Cuidado Integral Femenino con <br /> Profesionalismo y Empatía
    //         </h1>
    //         <p className="max-w-2xl mb-6 font-light text-gray-600 md:text-lg lg:text-xl">
    //           Tu bienestar es nuestra prioridad en cada etapa de tu vida.
    //         </p>

    //         {/* Botones */}
    //         <div className="space-y-3 sm:flex sm:space-y-0 sm:space-x-4 justify-center lg:justify-start mb-6">
    //           <button
    //             onClick={() => navigate("/agenda")}
    //             className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 transition"
    //           >
    //             <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
    //             Agenda tu cita
    //           </button>
    //           <button
    //             onClick={() => handleScroll("services")}
    //             className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-200 transition"
    //           >
    //             <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
    //             Mis servicios
    //           </button>
    //         </div>

    //         {/* Redes */}
    //         <div className="flex justify-center lg:justify-start gap-6">
    //           <a
    //             href="#"
    //             className="text-yellow-500 hover:text-yellow-600 text-2xl transition"
    //           >
    //             <FontAwesomeIcon icon={faInstagram} />
    //           </a>
    //           <a
    //             href="#"
    //             className="text-yellow-500 hover:text-yellow-600 text-2xl transition"
    //           >
    //             <FontAwesomeIcon icon={faWhatsapp} />
    //           </a>
    //         </div>
    //       </div>

    //       {/* --- Columna derecha: imagen del útero (Se mantiene el logo moderno) --- */}
    //       <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
    //         <img
    //           // **Ruta de la imagen que generamos del útero y flores**
    //           src="/src/assets/img/hero.png"
    //           alt="Símbolo de Cuidado Femenino"
    //           className="w-full h-auto object-contain max-h-[400px] shadow-lg rounded-xl"
    //         />
    //       </div>
    //     </div>

    //   </div>

    //   {/* ---------------------------------------------------- */}
    //   {/* --- Sección Alianzas (Logos de Empresas) --- */}
    //   {/* ---------------------------------------------------- */}
    //   <div className="bg-white border-t-4 border-yellow-500 pt-6 pb-8">
    //     <div className="max-w-screen-xl mx-auto text-center px-4">
    //       <h4 className="text-purple-700 font-semibold text-lg mb-4 uppercase tracking-wider">
    //         Alianzas y Colaboraciones
    //       </h4>

    //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center items-center">
    //         {/* Nota: Asegúrate de que las rutas 'logoX' sean correctas */}
    //         <img
    //           src={logo1}
    //           alt="Logo 1"
    //           className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
    //         />
    //         <img
    //           src={logo2}
    //           alt="Logo 2"
    //           className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
    //         />
    //         <img
    //           src={logo3}
    //           alt="Logo 3"
    //           className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
    //         />
    //         <img
    //           src={logo4}
    //           alt="Logo 4"
    //           className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
    //         />
    //         <img
    //           src={logo5}
    //           alt="Logo 5"
    //           className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
    //         />
    //       </div>
    //     </div>
    //   </div>

    // </section>
    <section id="inicio" className="bg-white py-16 w-full">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/img/fondo.png')", // 🔄 Usa aquí la ruta de tu imagen
        }}
      >
        {/* Capa semitransparente para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-white/60 lg:bg-white/50"></div>

        {/* Contenido principal */}
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10 px-6 py-20">
          {/* --- Columna izquierda: texto --- */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Cuidado Integral Femenino con{" "}
              <span className="text-purple-700">Profesionalismo</span> y{" "}
              <span className="text-purple-700">Empatía</span>
            </h1>

            <p className="text-gray-700 mb-8 text-base sm:text-lg">
              Ginecología y salud íntima con enfoque humano y atención
              personalizada.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScroll("services")}
                className="gap-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                Ver servicios
              </button>
              <button
                onClick={() => navigate("/agenda")}
                className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
              >
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                Agendar cita
              </button>
            </div>
          </div>

          {/* --- Columna derecha opcional (podés quitar si usás fondo completo) --- */}
          <div className="hidden lg:flex justify-center">
            {/* <img
        src="/src/assets/img/hero.png"
        alt="Cuidado Femenino"
        className="max-w-sm"
      /> */}
          </div>
        </div>
      </div>

      <div className="bg-white pt-6 pb-8">
        <div className="max-w-screen-xl mx-auto text-center px-4">
          <h4 className="text-purple-700 pb-3 font-bold  text-lg mb-4 ">
            Alianzas y Colaboraciones
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center items-center">
            {/* Nota: Asegúrate de que las rutas 'logoX' sean correctas */}
            <img
              src={logo1}
              alt="Logo 1"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
            <img
              src={logo2}
              alt="Logo 2"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
            <img
              src={logo3}
              alt="Logo 3"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
            <img
              src={logo4}
              alt="Logo 4"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
            <img
              src={logo5}
              alt="Logo 5"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
