import css from "styled-jsx/css"

export default css`
  img {
    margin-left: 32px;
  }
  div {
    display: none;
  }
  p {
    margin-top: -12px;
  }
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.3rem;
  }
  ul {
    display: flex;
    width: 100vh;
    justify-content: space-between;
    list-style: none;
    font-family: Verdana;
    border-bottom: 1px solid lightgrey;
  }

  nav > a > img {
    width: 39px;
    height: 39px;
    padding: 3px;
  }

  a {
    text-decoration: none;
    text-align: center;
    color: black;
  }

  @media (min-width: 810px) {
    div {
      display: block;
    }

    header {
      width: 70%;
    }

    img {
      width: 30px;
      height: 30px;
      padding: 2px;
      margin-right: 10px;
    }
  }
`
