import useSocial from "../../hooks/useSocial"
import socialStyle from "./socialStyle"
export default function Social({ props }) {
  const socials = useSocial()
  return (
    <>
      <nav>
        {props.map(function (social, idx) {
          return (
            <a key={idx} href={socials[social].url}>
              <img src={`../icons/${social}.svg`} alt={socials[social].alt} />
            </a>
          )
        })}
      </nav>
      <style jsx>{socialStyle}</style>
    </>
  )
}

/*

  { props.map}
        <a href="https://www.linkedin.com/in/dianahernandezsoler">
          <img src="../icons/linkedin.svg" alt="dianahernandezsoler" />
        </a>
        <a href="https://github.com/dianait">
          <img src="../icons/github.svg" alt="dianait" />
        </a>
        <a href="https://twitter.com/dianait_">
          <img src="../icons/twitter.svg" alt="dianait_" />
        </a>

        <a href="https://isntagram.com/dianait_">
          <img src="../icons/instagram.svg" alt="dianait_" />
        </a>

        <a href="./rss.xml">
          <img src="../icons/rss.svg" alt="feed" />
        </a>


*/
