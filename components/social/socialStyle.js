import css from "styled-jsx/css"

export default css`
  ul {
    display: flex;
    width: 100vh;
    justify-content: space-around;
    list-style: none;
    flex-wrap: wrap;
  }

  nav > a > img {
    width: 29px;
    height: 29px;
    padding: 3px;
  }

  nav {
    margin-right: 32px;
    margin-top: 32px;
  }

  @media (min-width: 1000px) {
    nav {
      margin-right: 64px;
    }
  }
`
