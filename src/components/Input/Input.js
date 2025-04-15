import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';

function Input({ redirectPath = '/' }) {
  const [inputValue, setInputValue] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    let valor = e.target.value;
    if (valor.startsWith('#')) {
      valor = valor.slice(1);
    }
    setInputValue(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '263') {
      navigate(redirectPath);
    } else {
      setMensajeError('No se encontró un expediente con ese número');
      setMostrarPopup(true);
    }
  };

  const recargarPagina = () => {
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Número de expediente:
          <input
            type="text"
            value={`#${inputValue}`}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Ir</button>
      </form>

      {mostrarPopup && (
        <Popup mensaje={mensajeError} onVolver={recargarPagina} />
      )}
    </div>
  );
}


export default Input;