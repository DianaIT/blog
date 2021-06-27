import css from "styled-jsx/css"

export default css`

  nav > a > img {
    width: 50px;
    height: 50px;
    padding: 0 8px;
  }

  nav {
    margin-top: 22px;
     display: flex;
    width 70vh;
     justify-content: center;
  }

  @media (max-width: 768px) {
   nav > a > img {
    width: 70px;
    height: 70px;
  }

   nav {
    justify-content: start;
    margin-left: 2rem;
    transform: rotate(-5deg);
  }
  }

`
