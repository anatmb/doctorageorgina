import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Agenda from "./pages/Agenda.tsx";

import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminCitas from "./pages/Admin.tsx";
import CalendarioCita from "./pages/CalendarioCitas.tsx";
import EditarCita from "./pages/EditarCita";
import CrearExpediente from "./pages/CrearExpediente.tsx";
import VerExpediente from "./pages/VerExpediente.tsx";
import Pacientes from "./pages/Pacientes.tsx";
import EditarPaciente from "./pages/EditarPaciente.tsx";
import EditarExpediente from "./pages/EditarExpediente";


function App() {
  return (
    <>
      {/* <Home/>
       <Route path="/agenda" element={<Agenda />} /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/agenda" element={<Agenda />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminCitas />} />
          <Route path="/calendario" element={<CalendarioCita />} />
          <Route path="/editar-cita/:id" element={<EditarCita />} />
           <Route path="/expediente/:dni/crear" element={<CrearExpediente/>} />
           <Route path="/expediente/:dni" element={<VerExpediente />} />
           <Route path="/editar-expediente/:dni" element={<EditarExpediente />} />
           
           <Route path="/pacientes" element={<Pacientes />} />
           <Route path="/paciente/editar/:dni" element={<EditarPaciente />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
