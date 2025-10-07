

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Agenda from "./pages/Agenda.tsx";

import './App.css'

function App() {

  return (
    <>
      {/* <Home/>
       <Route path="/agenda" element={<Agenda />} /> */}
          <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} /> {/* 🟣 nueva ruta */}
      </Routes>
    </Router>
    </>
  )
}

export default App
