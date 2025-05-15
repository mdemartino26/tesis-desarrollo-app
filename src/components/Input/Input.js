import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import './styles.css'

function Input({
  redirectPath = '/',
  titulo = 'Número de expediente:',
  placeholder = '#000',
  textoBoton = 'Ir',
  valorCorrecto = '263',
  mensajeErrorCustom = 'No se encontró un expediente con ese número',
}) {
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
    if (inputValue === valorCorrecto) {
      navigate(redirectPath);
    } else {
      setMensajeError(mensajeErrorCustom);
      setMostrarPopup(true);
    }
  };

  const recargarPagina = () => {
    window.location.reload();
  };

  return (
    <div>
      <form  className='alinearForm' onSubmit={handleSubmit}>
        <label>
          {titulo}
          <input
          className='input'
            type="text"
            value={`#${inputValue}`}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </label>
        <button type="submit" className='botonInput'>{textoBoton}</button>
      </form>

      {mostrarPopup && (
        <Popup mensaje={mensajeError} onVolver={recargarPagina} />
      )}
    </div>
  );
}

export default Input;