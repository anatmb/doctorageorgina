import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket, faUserShield } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);

  // Revisa si hay sesión al cargar el navbar
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdminLogged(!!token);
  }, [location]);

  const handleScroll = (id: string) => {
    setOpen(false);
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

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminLogged(false);
    navigate("/login");
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
        <nav className="hidden md:flex gap-6 text-gray-700 items-center">
          <button onClick={() => handleScroll("inicio")} className="hover:text-purple-700 transition-colors">
            Inicio
          </button>
          <button onClick={() => handleScroll("services")} className="hover:text-purple-700 transition-colors">
            Servicios
          </button>
          <button onClick={() => handleScroll("about")} className="hover:text-purple-700 transition-colors">
            Sobre mí
          </button>
          <button onClick={() => handleScroll("contact")} className="hover:text-purple-700 transition-colors">
            Contacto
          </button>

          <button
            onClick={() => navigate("/agenda")}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Agenda tu cita
          </button>

          {isAdminLogged ? (
            <>
              {/* <button
                onClick={() => navigate("/admin")}
                className="flex items-center gap-1 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <FontAwesomeIcon icon={faUserShield} /> Administrador
              </button> */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <FontAwesomeIcon icon={faRightFromBracket} /> Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <FontAwesomeIcon icon={faUser} /> Login Admin
            </button>
          )}
        </nav>

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
          <button onClick={() => handleScroll("inicio")} className="hover:text-purple-700">
            Inicio
          </button>
          <button onClick={() => handleScroll("services")} className="hover:text-purple-700">
            Servicios
          </button>
          <button onClick={() => handleScroll("about")} className="hover:text-purple-700">
            Sobre mí
          </button>
          <button onClick={() => handleScroll("contact")} className="hover:text-purple-700">
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

          {isAdminLogged ? (
            <>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/admin");
                }}
                className="flex items-center gap-1 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <FontAwesomeIcon icon={faUserShield} /> Administrador
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="flex items-center gap-1 bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <FontAwesomeIcon icon={faRightFromBracket} /> Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                navigate("/login");
              }}
              className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FontAwesomeIcon icon={faUser} /> Login Admin
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
