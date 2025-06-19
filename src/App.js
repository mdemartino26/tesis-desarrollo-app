import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Expediente from "./pages/Expediente/Expediente";
import Evidencia from "./pages/Evidencia/Evidencia";
import Sospechosos from "./pages/Sospechosos/Sospechosos";
import Scanner from "./components/Scanner/Scanner";

function App() {
  return (
    <div className="App">
      <div className="contenido-principal">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expediente" element={<Expediente />} />
            <Route path="/evidencia" element={<Evidencia />} />
            <Route path="/sospechosos" element={<Sospechosos />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/evidencia/:id" element={<Evidencia />} />
          </Routes>
        </Router>
      </div>

      <p className="celular">
        Este contenido está disponible solamente en dispositivos celulares.
      </p>
    </div>
  );
}

export default App;
