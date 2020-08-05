import css from "styled-jsx/css";

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
    justify-content: space-around;
    margin: 1rem;
  }
  ul {
    display: flex;
    width: 100vh;
    justify-content: space-around;
    list-style: none;
    font-family: Verdana;
    border-bottom: 1px solid lightgrey;
  }

  img {
    width: 50px;
    height: 50px;
    padding: 2px;
    margin-left: 10px;
  }

  h1 {
    font-family: "Amatic SC", cursive;
    font-size: 4rem;
    margin: 0;
    margin-left: -30px;
    margin-right: 1.4rem;
  }

  h2 {
    font-family: "Poiret One", cursive;
    letter-spacing: 12px;
    margin-top: -0.8rem;
    margin-left: -26px;
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
      justify-content: center;
      align-items: center;
    }

    nav {
      border-left: 2px solid lightgrey;
    }

    img {
      width: 30px;
      height: 30px;
      padding: 2px;
      margin-left: 10px;
    }
  }
`;
