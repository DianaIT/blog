import {
  Container,
  Image,
  GitHubLink,
  TextGitHub,
  Title,
  Logo,
  ListOfLogos,
  Descripction,
} from "./style"
export default function Card({
  title,
  mainColor,
  img,
  listOfStack,
  description,
  repository,
  deploy,
}) {
  return (
    <Container>
      <a href={repository} title="Ir al repositorio en GitHub">
        <GitHubLink>
          <TextGitHub>
            <img src="./img/social/github.svg" width="50" alt="github" />
          </TextGitHub>
        </GitHubLink>
      </a>

      <Image src={`./img/${img}`} alt={title} />
      <section>
        <a href={deploy} style={{ textDecoration: "none" }}>
          <Title style={{ color: mainColor }}>{title}</Title>
        </a>
        <Descripction>{description}</Descripction>
        <ListOfLogos>
          {listOfStack.map(({ id, width, name, extension }) => {
            return (
              <li style={{}} key={id}>
                <Logo
                  width={width}
                  src={`../icons/${name}${extension}`}
                  alt={`icono ${name}`}
                />
              </li>
            )
          })}
        </ListOfLogos>
      </section>
    </Container>
  )
}
