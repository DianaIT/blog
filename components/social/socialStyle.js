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
    width: 45px;
    height: 45px;
    padding: 3px;
  }

  nav {
    margin-right: 32px;
    margin-top: 32px;
  }
`
