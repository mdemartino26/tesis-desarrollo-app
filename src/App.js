import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Expediente from "./pages/Expediente/Expediente";
import Evidencia from "./pages/Evidencia/Evidencia";
import Sospechosos from "./pages/Sospechosos/Sospechosos";
import Scanner from "./components/Scanner/Scanner";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/expediente" element={<Expediente />} />
          <Route path="/evidencia" element={<Evidencia />} />
          <Route path="/sospechosos" element={<Sospechosos />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/evidencia/:id" element={<Evidencia />} />
        </Routes>
      </Router>

      <p className="celular">
        Este contenido esta disponible solamente en dispositivos celulares.
      </p>
    </div>
  );
}

export default App;
