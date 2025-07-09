const declaraciones = [
  {
    id: 1,
    codigo: "DOC001",
    resumen: [
      "Sofía Rivero, estudiante de Psicología, era mejor amiga de Clara Torres desde el inicio de la carrera.",
      "Se reunieron por última vez en la cafetería de la universidad un día antes de que encontraran el cuerpo de Clara.",
      "Sofía notó que <span class='destacado'> Clara estaba distraída y nerviosa, mirando constantemente su teléfono. </span> Al preguntarle, Clara mencionó que tenía estrés por los exámenes y un problema familiar.",
      "También dijo que había tomado una <span class='destacado'> decisión importante que cambiaría todo y que había discutido con alguien, pero no especificó quién.</span> ",
      "Sofía sospecha que pudo haber sido con Luis, con quien Clara ya no quería estar.",
      "En su despedida, Clara la abrazó más fuerte de lo normal y prometió contarle lo que la preocupaba.",
      "Al día siguiente, Sofía le escribió, pero no obtuvo respuesta. Más tarde, se enteró del trágico suceso. No entiende por qué no pudo hacerle algo, ya que Clara no tenía enemigos. Está dispuesta a colaborar en la investigación.",
    ],
    tipo: "sospechoso",
    nombre: "Sofía Rivero",
    img: "./img/sofia.jpg",
    edad: "22 años",
    relacion: "Mejor amiga",
  },
  {
    id: 2,
    codigo: "DOC002",
    resumen: [
      "Luis Álvarez, novio de Clara Torres, relata que aunque llevaban casi dos años juntos, en los últimos meses <span class='destacado'> Clara se fue distanciando</span>, atribuyéndolo a su carga de estudios.",
      "En los días previos a su muerte, Clara estaba más rara y ocupada con su grupo de estudio <span class='destacado'> tres veces por semana</span>, evitando hablar sobre ciertos temas.",
      "La última vez que la vio, Clara estaba cansada y preocupada, y <span class='destacado'> mencionó querer hablar sobre su futuro juntos, pero pospuso la conversación.</span>",
      "Luis está desconcertado y no puede entender quién pudo hacerle daño a Clara.",
    ],
    tipo: "sospechoso",
    nombre: "Luis",
    img: "./img/luis.jpg",
    edad: "23 años",
    relacion: "Novio",
  },
  {
    id: 3,
    codigo: "DOC003",
    resumen: [
      "Hernán López, de 22 años, estudiaba en la universidad con Clara Torres. Aunque no eran muy cercanos, compartían clases y formaban parte del mismo grupo de estudio. Clara era responsable y solidaria.", "El día de su muerte, era <span class='destacado'> uno de los dos dias de la semana en el que se reunían</span>, pero ella nunca apareció, lo cual fue inusual. Hernán le escribió, pero no obtuvo respuesta. Al salir de la biblioteca y, al atravesar el parque, encontró el cuerpo de Clara entre los arbustos. Impactado, llamó a la policía.", " <span class='destacado'> La última vez que la vio fue después de una clase de Procesos Cognitivos, cuando Clara se quedó hablando con el profesor, los eschuchó discutir y asumió que era por correcciones del último trabajo que entregaron. </span>",
    ],
    tipo: "sospechoso",
    nombre: "Hernán",
    img: "./img/hernan.jpg",
    edad: "23 años",
    relacion: "Compañero",
  },
  {
    id: 4,
    codigo: "DOC004",
    resumen: [
      "Celular de Clara",
    ],
    tipo: "evidencia",
    nombre: "Celular de clara",
    img: "./img/telefono.png",
  },
  {
    id: 4,
    codigo: "DOC004",
    resumen: [
      "Celular de Clara",
    ],
    tipo: "evidencia",
    nombre: "Celular de clara",
    img: "./img/telefono.png",
  },
];

export default declaraciones;
