

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Agenda from "./pages/Agenda.tsx";

import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";


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
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
