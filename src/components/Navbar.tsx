import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    setOpen(false);

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
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1
          onClick={() => navigate("/")}
          className="text-lg md:text-xl font-bold text-purple-700 cursor-pointer"
        >
          Dra. Georgina Meléndez
        </h1>

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <button
            onClick={() => handleScroll("inicio")}
            className="hover:text-purple-700 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-purple-700 transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-purple-700 transition-colors"
          >
            Sobre mí
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-purple-700 transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Botón Desktop */}
        <button
          onClick={() => navigate("/agenda")}
          className="hidden md:block bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
        >
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
          <button
            onClick={() => handleScroll("inicio")}
            className="hover:text-purple-700"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-purple-700"
          >
            Servicios
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-purple-700"
          >
            Sobre mí
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-purple-700"
          >
            Contacto
          </button>
          <button
            onClick={() => {
              setOpen(false);
              navigate("/agenda");
            }}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Agenda tu cita
          </button>
        </nav>
      )}
    </header>
  );
}
