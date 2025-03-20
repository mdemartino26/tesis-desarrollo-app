import React from 'react';
import './styles.css'
import Aplicaciones from '../../components/Aplicaciones/Aplicaciones';


function Menu() {

    const aplicaciones = [
        {
            name: "Mensajes",
            img: "",
            link: "/mensajes"
        },
        {
            name: "Chat",
            img: "",
            link: "/chat"
        },
        {
            name: "Evidencia",
            img: "",
            link: "/evidencia"
        },
    ]

    return (
        <div className="menu">
          <p>Hola, soy el menú</p>
          <section className="lista-aplicaciones">
            {aplicaciones.map((app, index) => (
              <Aplicaciones 
                key={index} 
                name={app.name} 
                img={app.img} 
                link={app.link} 
              />
            ))}
          </section>
        </div>
      );
    }
    
    export default Menu;