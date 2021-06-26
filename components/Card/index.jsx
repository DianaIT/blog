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

    <Container style={{background:mainColor + "75"}}>
      
      <Image src={`./img/${img}`} alt={title} />
      <section >
  <Title style={{ color: "white" }}>{title}</Title>
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

