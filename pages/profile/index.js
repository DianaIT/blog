import React from "react"
import { BackgroundImg } from "./style.js"
import Avatar from "../../components/avatar"
import Social from "components/social/index.js"

export default function profile() {
  // TODO: Compomente Proyecto y centrar avatar y redes sociales
  return (
    <>
      <BackgroundImg src="./img/header.jpg" alt="Diana Hernández" />
      <Avatar />
      <Social
        props={[
          "linkedin",
          "github",
          "twitter",
          "instagram",
          "flickr",
          "codepen",
        ]}
      />
    </>
  )
}
