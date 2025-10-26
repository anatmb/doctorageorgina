

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Agenda from "./pages/Agenda.tsx";

import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminCitas from "./pages/admin.tsx";



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
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
