import React, { useEffect, useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";


const declaraciones = [
  { id: 1, codigo: "DOC001", resumen: "Declaración de testigo ocular en la escena." },
  { id: 2, codigo: "DOC002", resumen: "Declaración del vecino que escuchó ruidos." },
  { id: 3, codigo: "DOC003", resumen: "Declaración del portero del edificio." },
];

function Sospechosos() {
  const [desbloqueadas, setDesbloqueadas] = useState([]);

 useEffect(() => {
  const data = JSON.parse(localStorage.getItem("scannerData")) || [];
  const idsSospechosos = data
    .filter((item) => item.tipo === "sospechoso")
    .map((item) => item.id);
  setDesbloqueadas(idsSospechosos);
}, []);

  return (
    <div className="sospechosos-page fondoGeneral">
      <Nav2 />
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
      <ButtonMenu />
    </div>
  );
}

export default Sospechosos;
