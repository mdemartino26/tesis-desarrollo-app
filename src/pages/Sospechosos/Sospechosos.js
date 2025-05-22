import React, { useEffect, useState } from "react";


const declaraciones = [
  { id: 1, resumen: "Declaración de testigo ocular en la escena." },
  { id: 2, resumen: "Declaración del vecino que escuchó ruidos." },
  { id: 3, resumen: "Declaración del portero del edificio." },
];

function Sospechosos() {
  const [desbloqueadas, setDesbloqueadas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scannerData")) || [];
    setDesbloqueadas(data);
  }, []);

  return (
    <div className="sospechosos-page fondoGeneral">
      <h2>Sospechosos</h2>

      {desbloqueadas.length === 0 ? (
        <p>Escaneá los códigos para agregar a la lista.</p>
      ) : (
        <section className="cards-container">
          {declaraciones
            .filter((decl) => desbloqueadas.includes(decl.id))
            .map((decl) => (
              <div className="card" key={decl.id} onClick={() => alert(decl.resumen)}>
                <p>Sospechoso #{decl.id}</p>
              </div>
            ))}
        </section>
      )}
    </div>
  );
}

export default Sospechosos;
