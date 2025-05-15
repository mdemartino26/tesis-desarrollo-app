import React from 'react';
import './styles.css';

const VictimaInfo = ({ nombre, edad, causa }) => {
  return (
    <div className="victima-info">
      <h2>Víctima: {nombre}</h2>
      <p>Edad: {edad} años</p>
      <p>Causa de muerte: {causa}</p>
    </div>
  );
};

export default VictimaInfo;