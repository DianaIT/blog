import css from "styled-jsx/css"

export default css`
  div {
    display: none;
  }
  p {
    margin-top: -12px;
  }
  header {
    display: flex;
    width: 100vh;
    align-items: center;
    justify-content: space-between;
    margin: 0.3rem;
  }
  ul {
    display: flex;
    width: 100vh;
    justify-content: space-around;
    list-style: none;
    font-family: Verdana;
    border-bottom: 1px solid lightgrey;
  }

  nav > a > img {
    width: 30px;
    height: 30px;
    padding: 3px;
  }

  nav {
    margin-right: 64px;
  }

  a {
    text-decoration: none;
    text-align: center;
    color: black;
  }

  @media (min-width: 1000px) {
    div {
      display: block;
    }

    header {
      justify-content: space-between;
      align-items: center;
    }

    img {
      width: 30px;
      height: 30px;
      padding: 2px;
      margin-right: 10px;
    }
  }
`
