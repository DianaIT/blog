import Head from "next/head";
import styles from "./styles";
import Link from "next/link";
import Avatar from "../components/avatar/index";

export default function Header() {
  return (
    <>
      <Head>
        <title>DianaIT's blog</title>
        <meta name="description" content="Diario de una developer en apurOS" />
        <link rel="shortcut icon" type="icon" href="./img/favicon.ico" />
      </Head>
      <header>
        <div>
          <Avatar />
        </div>

        <section>
          <h1>
            <Link href="/">
              <a> Diana Hernández </a>
            </Link>
          </h1>
          <h2>Series & Front</h2>
        </section>
        <nav>
          <a href="https://twitter.com/dianait_">
            <img src="../icons/003-gorjeo.svg" alt="icono twitter" />
          </a>

          <a href="https://github.com/dianait">
            <img src="../icons/001-github.svg" alt="icono github" />
          </a>
          <a href="https://www.linkedin.com/in/dianahernandezsoler">
            <img src="../icons/004-linkedin.svg" alt="icono linkedin" />
          </a>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </>
  );
}
