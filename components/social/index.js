import socialStyle from "./socialStyle"
export default function Social() {
  return (
    <>
      <nav>
        <a href="https://twitter.com/dianait_">
          <img src="../icons/twitter.svg" alt="dianait_" />
        </a>
        <a href="https://github.com/dianait">
          <img src="../icons/github.svg" alt="dianait" />
        </a>
        <a href="https://isntagram.com/dianait_">
          <img src="../icons/instagram.svg" alt="dianait_" />
        </a>
        <a href="https://www.linkedin.com/in/dianahernandezsoler">
          <img src="../icons/linkedin.svg" alt="dianahernandezsoler" />
        </a>
        <a href="./rss.xml">
          <img src="../icons/rss.svg" alt="feed" />
        </a>
      </nav>
      <style jsx>{socialStyle}</style>
    </>
  )
}
