import css from "styled-jsx/css";

export default css`
  p {
    margin-top: -12px;
  }
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
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

  nav {
    display: flex;
    margin: auto auto;
    padding-left: 0.8rem;
    border-left: 2px solid lightgrey;
  }
  img {
    width: 30px;
    height: 30px;
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

  a:visited {
    color: grey;
  }

  li {
    padding-top: 2px;
    padding-bottom: 2px;
    width: 8rem;
    align-items: center;
  }

  li:hover {
    padding-top: 0;
    border-top: 2px solid grey;
  }
`;
