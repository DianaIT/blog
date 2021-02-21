import { PortfolioContainer } from "./style.js"
import { projects } from "../../data/projects"
import Card from "../Card"

export default function portfolio() {
  return (
    <>
      <PortfolioContainer>
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            mainColor={project.mainColor}
            img={project.img}
            listOfStack={project.stack}
            description={project.description}
            repository={project.repository}
            deploy={project.deploy}
          />
        ))}
      </PortfolioContainer>
    </>
  )
}
