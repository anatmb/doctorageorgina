import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="bg-white w-full pt-10 md:pt-2">
      {/* ✅ Versión APP (solo móvil) */}
      <div className="flex flex-col items-center text-center py-10 bg-purple-800 text-white rounded-b-3xl md:hidden">
        <div className="bg-purple-700 p-4 rounded-full w-24 h-24 flex items-center justify-center mb-4">
          <img
            src="/src/assets/img/foto-hero.png"
            alt="Dra. Georgina Meléndez"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold">Dra. Georgina Meléndez</h1>
        <p className="text-yellow-400 tracking-wide text-sm font-medium">
          GINECÓLOGA y OBSTETRA
        </p>

        <div className="flex flex-col gap-3 w-full px-8 mt-8">
          <button
            onClick={() => navigate("/agenda")}
            className="flex items-center justify-center gap-2 bg-yellow-500 text-purple-800 py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            Turnos
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-purple-800 py-3 rounded-lg font-medium hover:bg-purple-100 transition">
            <FontAwesomeIcon icon={faLocationDot} />
            Servicios
          </button>
        </div>

        <div className="flex justify-center gap-6 pt-6 text-2xl">
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      {/* ✅ Versión ESCRITORIO / TABLET */}
      <div className="hidden md:flex max-w-screen-xl mx-auto flex-col-reverse md:flex-row items-start gap-x-10 lg:gap-x-12 px-6 pt-24 pb-4">
        {/* Imagen izquierda */}
        <div className="w-full md:w-1/2 flex">
          <img
            src="/src/assets/img/foto-hero.png"
            alt="Dra. Georgina Meléndez"
            className="w-full h-auto object-cover rounded-2xl shadow-xl" // CLASES MODIFICADAS
          />
        </div>

        {/* Contenido derecho */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-5 lg:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-700 leading-snug">
            Cuidado Integral Femenino con <br /> Profesionalismo y Empatía
          </h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            Tu bienestar es nuestra prioridad en cada etapa de tu vida.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            <button
              onClick={() => navigate("/agenda")}
              className="btn-inline flex items-center justify-center gap-2 bg-purple-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-purple-800 transition w-full sm:w-auto"
            >
              <FontAwesomeIcon icon={faCalendarDays} />
              Agenda tu cita
            </button>
            <button className="btn-inline flex items-center justify-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-yellow-600 transition w-full sm:w-auto">
              <FontAwesomeIcon icon={faLocationDot} />
              Mis servicios
            </button>
          </div>

          {/* Redes */}
          <div className="flex justify-center md:justify-start gap-5 pt-3">
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-600 text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-600 text-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
               {/* div de promo */}
          <div className="mt-8 border-4 border-purple-700 rounded-lg shadow-xl p-5 bg-white w-full sm:w-80 md:w-96 md:hidden lg:block">
            {" "}
            {/* CLASE MODIFICADA */}
            <p className="text-lg font-semibold text-gray-800">
              PROMO ESPECIAL
            </p>
            <h3 className="text-xl font-extrabold text-purple-700">
              COLPOSCOPIA + CONSULTA
            </h3>
            <p className="text-5xl font-black text-purple-800 mt-2">
              <span className="text-3xl align-top text-gray-700">$</span>450
            </p>
            <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      {/* Sección Alianzas */}
      <div className="bg-white border-t border-yellow-400 pt-2 pb-8 hidden md:block">
        <div className="max-w-screen-xl mx-auto text-center px-4">
          <h4 className="text-purple-700 font-semibold text-lg mb-2">
            Nuestras Alianzas
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-500 justify-items-center">
            <span>logo 1</span>
            <span>logo 2</span>
            <span>logo 3</span>
            <span>logo 4</span>
            <span>logo 5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
