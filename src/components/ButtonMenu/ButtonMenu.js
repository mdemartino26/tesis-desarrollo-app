import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'

function ButtonMenu() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/menu");
    };
  
    return (
      <div className="boton-menu" onClick={handleClick}>
        <button className="inicio-button">
          <img src="./img/inicio.png" alt="menu"/>
        </button>
      </div>
    );
  }
export default ButtonMenu
