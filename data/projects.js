const defaultWith = 20
export const projects = [
  {
    id: 1,
    name: "👋 FLIX",
    mainColor: "#B22222",
    secondaryColor: "#F0E68C",
    img: "portfolio/handflix.jpg",
    description:
      "Os presento a Handflix. Un reproductor de video que funciona con reconocimiento de gestos. Trabajo final de la asigntura de Visión Artificial.",
    repository: "https://github.com/mawcoo/HandFlix",
    deploy: "",
    stack: [
      { id: 1, name: "python", width: defaultWith + 10, extension: ".svg" },
      { id: 2, name: "flask", width: defaultWith + 10, extension: ".svg" },
      { id: 5, name: "mediapipe", width: defaultWith * 5, extension: ".png" },
    ],
  },
  {
    id: 2,
    name: "🧱 Stackgen",
    mainColor: "#01A9A0",
    secondaryColor: "#719fb0",
    img: "portfolio/stackgen.jpg",
    description:
      "Quería aprender React y se me ocurrió esta idea. StackGen te genera un png con tu stack tecnológico favorito, bueno, en ocasiones, no tan tecnólogico 😜 Escoge hasta tu cafetera. ",
    repository: "https://github.com/DianaIT/stackgen",
    deploy: "https://stackgen.vercel.app ",
    stack: [
      { id: 1, name: "react", width: defaultWith + 30, extension: ".png" },
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
    secondaryColor: "#719fb0",
    img: "portfolio/seriesandfront.jpg",
    description:
      "Blog de series y desarrollo. Hace tiempo tenía un blog donde escribía de series de televisión y como me gusta mezclar cosas, tras aprender React, quería probar Next.js, y esta fue la excusa perfeta.",
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
    secondaryColor: "#719fb0",
    img: "portfolio/jinkobot.jpg",
    description:
      "Su nombre es Jinkobot y es un robot para apoyo en terapia con niños con TEA. Disfruté tanto con este proyecto que ahora mismo estoy trabajando en él y mejorándolo para presentarlo como mi Trabajo Final de Grado.",
    repository: "https://github.com/DianaIT/JinkoRobotics/tree/develop",
    deploy: "",
    stack: [
      { id: 1, name: "ionic", width: defaultWith + 60, extension: ".png" },
      { id: 2, name: "angular", width: defaultWith + 20, extension: ".svg" },
      { id: 3, name: "python", width: defaultWith + 20, extension: ".svg" },
      { id: 4, name: "ros", width: 80, extension: ".png" },
    ],
  },
  {
    id: 5,
    name: "🚲 EcoHolder",
    mainColor: "#53D485",
    secondaryColor: "#719fb0",
    img: "portfolio/ecoHolder.JPG",
    description:
      "Al escoger un destino se te aconseja cuales son las rutas con el menor nivel de gases perjudiciales. Utilizamos firebase para servir datos en tiempo real pero además tenemos nuestro propio servidor en node para el procesamiento de los datos que se guardan en firestore.",
    repository: "https://github.com/DianaIT/ecoHolder",
    deploy: "",
    stack: [
      { id: 1, name: "ionic", width: defaultWith + 60, extension: ".png" },
      { id: 2, name: "angular", width: defaultWith + 20, extension: ".svg" },
      { id: 3, name: "nodejs", width: defaultWith + 20, extension: ".svg" },
      { id: 4, name: "firebase", width: defaultWith + 30, extension: ".svg" },
    ],
  },
]
