import React from 'react';
import './styles.css'

function Heading1({ texto }) {
  return (
    <h1 className='heading1'>
      {texto}
    </h1>
  );
}

export default Heading1;