// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         localStorage.setItem("adminToken", data.token);
//         navigate("/admin");
//       } else {
//         setError("Usuario o contraseña incorrectos");
//       }
//     } catch (err) {
//       setError("Error de conexión con el servidor");
//     }
//   };

//   return (
//     <section className="h-screen flex items-center justify-center bg-purple-50">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
//         <h2 className="text-2xl font-bold text-purple-700 mb-6">Acceso Admin</h2>
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Usuario"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border rounded-lg px-4 py-2"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border rounded-lg px-4 py-2"
//             required
//           />
//           {error && <p className="text-red-600 text-sm">{error}</p>}
//           <button
//             type="submit"
//             className="bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
//           >
//             Ingresar
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle} from "@fortawesome/free-brands-svg-icons";

// faGithub 
export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin");
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="min-h-screen flex bg-purple-50 pt-14 md:items-center md:justify-center">
      <div className="bg-purple-100 rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full max-w-4xl overflow-hidden">

        {/* Left side: imagen */}
        <div className="lg:w-1/2 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: formulario */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">Ingresar Usuario</h1>

          {/* Botones login social */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center w-full py-2 px-4 rounded-xl bg-yellow-500 hover:bg-yellow-700 text-white shadow-lg transition">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              <span>Login con Google</span>
            </button>
            {/* <button className="flex items-center justify-center w-full py-2 px-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white shadow-lg transition">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <span>Login con GitHub</span>
            </button> */}
          </div>

          {/* Separador */}
          <div className="flex items-center text-gray-400 mb-6">
            <hr className="flex-1 border-gray-600" />
            <span className="px-2 text-sm">o</span>
            <hr className="flex-1 border-gray-600" />
          </div>

          {/* Formulario */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold shadow-lg hover:from-purple-600 hover:to-purple-800 transition"
            >
              Ingresar
            </button>
          </form>

          {/* Links */}
          <p className="flex justify-between text-sm text-black mt-4">
            <a href="#" className="hover:text-white transition">Olvidé mi contraseña</a>
            <a href="#" className="hover:text-white transition">Registrarse</a>
          </p>
        </div>
      </div>
    </div>
  );
}
