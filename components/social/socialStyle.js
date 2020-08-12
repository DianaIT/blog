import css from "styled-jsx/css"

export default css`
  ul {
    display: flex;
    width: 100vh;
    justify-content: space-around;
    list-style: none;
  }

  nav > a > img {
    width: 39px;
    height: 39px;
    padding: 3px;
  }

  nav {
    margin-right: 32px;
  }

  @media (min-width: 1000px) {
    nav {
      margin-right: 0;
    }
  }
`
