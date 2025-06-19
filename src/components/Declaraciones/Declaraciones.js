const declaraciones = [
  {
    id: 1,
    codigo: "DOC001",
    resumen: [
      "Sofía Rivero, estudiante de Psicología, era mejor amiga de Clara Torres desde el inicio de la carrera.",
      "Se reunieron por última vez en la cafetería de la universidad un día antes de que encontraran el cuerpo de Clara.",
      "Sofía notó que Clara estaba distraída y nerviosa, mirando constantemente su teléfono. Al preguntarle, Clara mencionó que tenía estrés por los exámenes y un problema familiar.",
      "También dijo que había tomado una decisión importante que cambiaría todo y que había discutido con alguien, pero no especificó quién.",
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
      "Luis Álvarez, novio de Clara Torres, relata que aunque llevaban casi dos años juntos, en los últimos meses Clara se fue distanciando, atribuyéndolo a su carga de estudios.",
      "En los días previos a su muerte, Clara estaba más rara y ocupada con su grupo de estudio, evitando hablar sobre ciertos temas.",
      "La última vez que la vio, Clara estaba cansada y preocupada, y mencionó querer hablar sobre su futuro juntos, pero pospuso la conversación.",
      "Luis está desconcertado y no puede entender quién pudo hacerle daño a Clara.",
    ],
    tipo: "evidencia",
    nombre: "Luis",
    img: "./img/luis.jpg",
    edad: "23 años",
  },
  {
    id: 3,
    codigo: "DOC003",
    resumen: "Declaración del portero del edificio.",
    tipo: "sospechoso",
    nombre: "clara",
    img: "./img/sospechosos.png",
    edad: "22 años",
  },
];

export default declaraciones;
