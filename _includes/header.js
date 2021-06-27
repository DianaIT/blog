import React from "react"
import Head from "next/head"
import styles from "./styles"
import Menu from "components/Menu"

function Header() {
  return (
    <>
      <Head>
        <title>Dianait</title>
        <meta name="description" content="Página personal de Diana Hernández" />
        <link rel="shortcut icon" type="icon" href="./img/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <img
        style={{ width: "200px", height: "170px" }}
        src="../img/SFlogo_large.PNG"
        alt="Series & Front"
      />

      <style jsx>{styles}</style>
    </>
  )
}

export default React.memo(Header)

//  <Social props={["linkedin", "github", "twitter", "feed"]} />
