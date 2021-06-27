import styled from "styled-components"

export const Image = styled.img`
  width: 100%;
  float: right;
  border-radius: 3%;
`

export const BackgroundImage = styled.section`
  border: 2px solid #466f35;
  border-radius: 3%;
  width: 40%;
  margin-left: 1rem;
  background-color: #6ca04fdd;
  box-shadow: 2px 2px 3px #466f35;
  transform: rotate(10deg);
  @media (max-width: 768px) {
    margin-bottom: 6vh;
    width: 50%;
  }
`

export const Container = styled.div`
  margin: 10vh 0 0 0;
  display: flex;
  width: 85%;
  justify-content: space-around;
  align-content: center;
  padding: 3rem;
  align-items: center;
  line-height: 1.4;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0 0 0;
  }
`

export const Text = styled.p`
  font-size: 1.1rem;
  max-width: 60%;
  margin-left: -1vh;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90vh;
    margin-left: 0;
    font-size: 1.7rem;
  }
`
