import { Container, Image, BackgroundImage, Text } from "./style.js"
import Social from "../social"
export default function MainProfile() {
  return (
    <Container>
      <BackgroundImage>
        <Image src="./img/main/hulk.png" />
      </BackgroundImage>
      <Text>
        <strong>¡Hola, soy Diana!</strong>
        <br />
        👩‍💻 | 🖖 | 🏳️‍🌈 | 📸 | 📺 | ☕ | ✈️ <br /> Desarrolladora frontend. Friki
        de nacimiento, me gusta cualquier cosa con canela y reir a carcajadas.
        Cambio saber por entender con los ojos cerrados. Puedes encontrarme por
        aquí 👇
        <Social
          props={["linkedin", "github", "twitter", "instagram", "codepen"]}
          width="49"
        />
      </Text>
    </Container>
  )
}
