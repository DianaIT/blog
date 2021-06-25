import { Container, Image, BackgroundImage, Text } from "./style.js"
import Social from "../social"
export default function MainProfile() {
  return (
    <Container>
      <BackgroundImage>
        <Image src="./img/main/hulk.png" />
      </BackgroundImage>
      <Text>
        <h1>¡Hola, soy Diana!</h1>
        <br />
        👩‍💻 | 🖖 | 🏳️‍🌈 | 📸 | 📺 | ☕ | ✈️ <br /> <div style={{textAlign: "left", marginTop: ".6rem"}}>Desarrolladora frontend. Friki
        de nacimiento, me gusta cualquier cosa con canela y reir a carcajadas.
        Puedes encontrarme por aquí 👇</div>
        <Social
          props={["linkedin", "github", "twitter", "instagram", "codepen"]}
        />
      </Text>
    </Container>
  )
}
