import { Container, Image, BackgroundImage, Text } from "./style.js"
import Social from "../social"
export default function MainProfile() {
  return (
    <Container>
      <BackgroundImage>
        <Image src="./img/main/hulk.png" />
      </BackgroundImage>
      <Text>
        <h1 style={{ marginBottom: "-1rem" }}>¡Hola, soy <span style={{color: "#218d7e"}}>Diana</span>!</h1>
        <br />
        👩‍💻 | 🖖 | 🏳️‍🌈 | 📸 | 📺 | ☕ | ✈️ <br /> <div style={{textAlign: "left", marginTop: ".6rem"}}>Desarrolladora mobile junior. Friki
        de nacimiento, me gusta la fotografía, cualquier cosa con canela y reir a carcajadas.</div>
        <Social
          props={["linkedin", "github"]}
        />
      </Text>
    </Container>
  )
}
