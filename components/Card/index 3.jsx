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
  img,
  listOfStack,
  description,
  repository,
  deploy,
}) {
  return (
    <Container>
      <a href={deploy} style={{ textDecoration: "none" }}>
        <Title>{title}</Title>
        <Descripction>{description}</Descripction>
      </a>
      <a href={repository} title="Ir al repositorio en GitHub">
        <GitHubLink>
          <TextGitHub>
            <img src="./img/social/github.svg" width="50" alt="github" />
          </TextGitHub>
        </GitHubLink>
      </a>

      <Image src={`./img/${img}`} alt={title} />
      <section>
        <ListOfLogos>
          {listOfStack.map((stack, idx) => {
            return (
              <Logo
                width={stack.width}
                key={idx}
                src={`../icons/${stack.name}${stack.extension}`}
                alt={`icono ${stack.name}`}
              />
            )
          })}
        </ListOfLogos>
      </section>
    </Container>
  )
}
