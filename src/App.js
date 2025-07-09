import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Expediente from "./pages/Expediente/Expediente";
import Evidencia from "./pages/Evidencia/Evidencia";
import Sospechosos from "./pages/Sospechosos/Sospechosos";
import Scanner from "./pages/Scanner/Scanner";
import Mensajes from "./pages/Mensajes/Mensajes";
import Chat from "./pages/Chat/Chat";
import Telefono from "./pages/Telefono/Telefono";
import NotificacionDetective from "./components/Notificacion/Notificacion";

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
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/telefono" element={<Telefono />} />
        </Routes>
      </Router>
      <NotificacionDetective /> 

      <p className="celular">
        Este contenido esta disponible solamente en dispositivos celulares.
      </p>
    </div>
  );
}

export default App;