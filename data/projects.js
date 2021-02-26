const defaultWith = 20
export const projects = [
  {
    id: 1,
    name: "👋 FLIX",
    mainColor: "red",
    img: "portfolio/handflix.jpg",
    description:
      "Os presento a Handflix. Un reproductor de video que funciona con gestos. Trabajo final de la asigntura de Visión Artificial.",
    repository: "https://github.com/mawcoo/HandFlix",
    deploy: "",
    stack: [
      { id: 1, name: "python", width: defaultWith + 10, extension: ".svg" },
      { id: 2, name: "flask", width: defaultWith + 10, extension: ".svg" },
      { id: 3, name: "html5", width: defaultWith + 10, extension: ".svg" },
      { id: 4, name: "css3", width: defaultWith + 10, extension: ".svg" },
      { id: 5, name: "mediapipe", width: defaultWith * 5, extension: ".png" },
    ],
  },
  {
    id: 2,
    name: "🧱 Stackgen",
    mainColor: "#01A9A0",
    img: "portfolio/stackgen.jpg",
    description:
      "StackGen te genera un png con tu stack favorito, bueno, en ocasiones, no tan tecnólogico 😜 Escoge hasta tu cafetera. ",
    repository: "https://github.com/DianaIT/stackgen",
    deploy: "https://stackgen.vercel.app ",
    stack: [
      { id: 1, name: "react", width: defaultWith + 20, extension: ".svg" },
      {
        id: 2,
        name: "styledComponents",
        width: defaultWith * 2,
        extension: ".png",
      },
      { id: 3, name: "jsx", width: defaultWith + 20, extension: ".png" },
    ],
  },
  {
    id: 3,
    name: "📺 Front & Series",
    mainColor: "#416DAB",
    img: "portfolio/seriesandfront.jpg",
    description:
      "Blog de series y desarrollo web. Me gusta mezclar cosas. Tras aprender React, quería probar Next.js, y esta fue la excusa perfecfa.",
    repository: "https://github.com/DianaIT/blog",
    deploy: "https://dianait.vercel.app/blog",
    stack: [
      { name: "nextjs", width: defaultWith * 2.5, extension: ".svg" },
      { name: "styledComponents", width: defaultWith * 2.5, extension: ".png" },
    ],
  },
  {
    id: 4,
    name: "🤖 Jinkobot",
    mainColor: "#AB1E1F",
    img: "portfolio/jinkobot.jpg",
    description:
      "Su nombre es Jinko y es un robot para apoyo en terapia con niños con TEA.",
    repository: "https://github.com/DianaIT/JinkoRobotics/tree/develop",
    deploy: "",
    stack: [
      { id: 1, name: "ionic", width: defaultWith + 40, extension: ".svg" },
      { id: 2, name: "angular", width: defaultWith + 20, extension: ".svg" },

      { id: 3, name: "python", width: defaultWith + 20, extension: ".svg" },
      { id: 4, name: "ros", width: 80, extension: ".png" },
    ],
  },
  {
    id: 5,
    name: "🚲 EcoHolder",
    mainColor: "#53D485",
    img: "portfolio/ecoHolder.JPG",
    description:
      "Mide la contaminación de tu zona. Nuestra app te muestra un mapa y al escoger un destino se te aconseja cuales son las rutas con el menor nivel de gases perjudiciales.",
    repository: "https://github.com/DianaIT/ecoHolder",
    deploy: "",
    stack: [
      { id: 1, name: "ionic", width: defaultWith + 40, extension: ".svg" },
      { id: 2, name: "angular", width: defaultWith + 20, extension: ".svg" },
      { id: 3, name: "nodejs", width: defaultWith + 20, extension: ".svg" },
    ],
  },
]
