import styled from "styled-components"

export const Container = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  display: flex;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90vh;
  }
`

export const Image = styled.img`
  width: 70vh;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Title = styled.p`
  font-size: 1.7rem;
  margin-top: 1rem;
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  text-align: center;
  font-weight: 700;
`

export const Logo = styled.img`
  padding: 0rem;
  margin: 0.8rem;
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
  margin: 0 2.5rem;
  font-size: 0.9rem;
`
export const Anchor = styled.a`
  text-decoration: none;
  background: steelblue;
  padding: 8px;
  color: white;
  display: block;
  margin: 8px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px;
  &:hover {
    box-shadow: none;
  }
`

export const ContainerLinks = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`
