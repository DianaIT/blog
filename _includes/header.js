import Head from "next/head"
import styles from "./styles"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <Head>
        <title>Dianait blog</title>
        <meta name="description" content="Diario de una developer en apurOS" />
        <link rel="shortcut icon" type="icon" href="./img/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>
            <img
              style={{ width: "200px", height: "170px", "margin-left": "32px" }}
              src="../img/SFlogo_large.PNG"
              alt="Series & Front"
            />
          </a>
        </Link>
        <nav>
          <a href="https://twitter.com/dianait_">
            <img src="../icons/003-gorjeo.svg" alt="dianait_" />
          </a>

          <a href="https://github.com/dianait">
            <img src="../icons/001-github.svg" alt="dianait" />
          </a>
          <a href="https://www.linkedin.com/in/dianahernandezsoler">
            <img src="../icons/004-linkedin.svg" alt="dianahernandezsoler" />
          </a>
        </nav>
      </header>

      <style jsx>{styles}</style>
    </>
  )
}
