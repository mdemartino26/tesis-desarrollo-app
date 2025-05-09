import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Expediente from "./pages/Expediente/Expediente";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/expediente" element={<Expediente />} />
      </Routes>
    </Router>

      <p className="celular">
        Este contenido esta disponible solamente en dispositivos celulares.
      </p>
    </div>
  );
}

export default App;
