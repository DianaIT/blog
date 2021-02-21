import React from "react"
import Head from "next/head"
import styles from "./styles"
import Link from "next/link"
import Menu from "components/Menu"
import Social from "components/social/index"
import { useRouter } from "next/router"

function Header() {
  const router = useRouter()
  const location = router.pathname
  return (
    <>
      <Head>
        <title>Dianait | Developer </title>
        <meta name="description" content="Página personal de Diana Hernández" />
        <link rel="shortcut icon" type="icon" href="./img/favicon.ico" />
      </Head>
      <header>
        {location !== "/" && location !== "/portfolio" ? (
          <>
            <Link href={location === "/blog" ? "/" : "/blog"}>
              <a>
                <img
                  style={{ width: "200px", height: "170px" }}
                  src="../img/SFlogo_large.PNG"
                  alt="Series & Front"
                />
              </a>
            </Link>
            <Social
              props={["linkedin", "github", "twitter", "instagram", "feed"]}
            />
          </>
        ) : (
          <Menu />
        )}
      </header>

      <style jsx>{styles}</style>
    </>
  )
}

export default React.memo(Header)

/*



*/
