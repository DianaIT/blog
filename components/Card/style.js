import styled from "styled-components"

export const Container = styled.div`
  width: 300px;
  position: relative;
  border-radius: 2%;
  box-shadow: 2px -3px 2px #719fb0;
  margin: 1.5rem;
`

export const Image = styled.img`
  width: 100%;
  min-width: 300px;
  max-height: 100vh;
  border-radius: 2% 2% 0 0;
`
export const GitHubLink = styled.div`
  position: absolute;
  right: -45px;
  top: -10px;
  width: 0;
  height: 0;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 70px solid #719fb0;
  transition: border-bottom 0.5s linear;
  transform: rotate(45deg);
  &:hover {
    border-bottom: 70px solid #91abb5;
  }
`

export const TextGitHub = styled.p`
  width: 2.5rem;
  margin-left: -20px;
  margin-top: 21px;
  font-size: 1.15rem;
  color: white;
  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.1);
  }
`

export const Title = styled.p`
  font-size: 1.5rem;
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  text-align: center;
  font-weight: 700;
  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.2);
  }
`

export const Logo = styled.img`
  padding: 0.3rem;
`

export const ListOfLogos = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
`

export const Descripction = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0.5rem;
  font-size: 0.8rem;
`
