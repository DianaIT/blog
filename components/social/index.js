import socialStyle from "./socialStyle";
export default function Social() {
  return (
    <>
      <nav>
        <a href="https://twitter.com/dianait_">
          <img src="../icons/003-gorjeo.svg" alt="icono twitter" />
        </a>
        <a href="https://github.com/dianait">
          <img src="../icons/001-github.svg" alt="icono github" />
        </a>
        <a href="https://codepen.io/dashboard">
          <img src="../icons/002-codepen.svg" alt="icono codepen" />
        </a>
        <a href="https://www.linkedin.com/in/dianahernandezsoler">
          <img src="../icons/004-linkedin.svg" alt="icono linkedin" />
        </a>
      </nav>
      <style jsx>{socialStyle}</style>
    </>
  );
}
