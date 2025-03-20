import React from 'react';

function Aplicaciones({ name, img, link }) {
  return (
    <article className="aplicaciones">
      <a href={link}>
        <button>
          <img src={img} alt={name} />
        </button>
      </a>
      <p>{name}</p>
    </article>
  );
}

export default Aplicaciones;