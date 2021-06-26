import Button from "../Button";
import {
  Container,
  Image,
  Title,
  Logo,
  ListOfLogos,
  Descripction,
  Anchor,
  ContainerLinks
} from "./style"

export default function Card({
  title,
  mainColor,
  img,
  listOfStack,
  description,
  repository,
  deploy,
})
{

  return (

    <Container>
      
      <Image src={`./img/${img}`} alt={title} />
      <section >
  <Title style={{ color: mainColor }}>{title}</Title>
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
              <ContainerLinks>
        { repository && <Anchor href={ repository }>Ver Código</Anchor>}
        { deploy && <Anchor href={deploy}>Ver Demo</Anchor> }
        </ContainerLinks>
      </section>
     

    </Container>


  )
}


/*

    <a href={repository} title="Ir al repositorio en GitHub">
        <GitHubLink>
          <TextGitHub>
            <img src="./img/social/github.svg" width="50" alt="github" />
          </TextGitHub>
        </GitHubLink>
      </a> 


*/