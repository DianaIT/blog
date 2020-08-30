import React from "react"
import Head from "next/head"
import styles from "./styles"
import Social from "components/social/index"
import Link from "next/link"

function Header() {
  return (
    <>
      <Head>
        <title>Series & Front | Blog</title>
        <meta name="description" content="Diario de una developer en apurOS" />
        <link rel="shortcut icon" type="icon" href="./img/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>
            <img
              style={{ width: "200px", height: "170px" }}
              src="../img/SFlogo_large.PNG"
              alt="Series & Front"
            />
          </a>
        </Link>

        <Social />
      </header>

      <style jsx>{styles}</style>
    </>
  )
}

export default React.memo(Header)
