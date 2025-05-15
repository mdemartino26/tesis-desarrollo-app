import React from 'react';

function Aplicaciones({ name, img, link, onClick }) {
  return (
    <article className="aplicaciones">
      {link ? (
        <a href={link}>
          <button>
            <img src={img} alt={name} />
          </button>
        </a>
      ) : (
        <button onClick={onClick}>
          <img src={img} alt={name} />
        </button>
      )}
      <p>{name}</p>
    </article>
  );
}

export default Aplicaciones;
