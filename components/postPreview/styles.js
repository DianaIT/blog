import css from "styled-jsx/css"

export default css`
  @font-face {
    font-family: "Mulish";
    src: url("../../fonts/Mulish-Regular.ttf");
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Mulish", sans-serif, Verdana;
    font-weight: 400;
    display: block;
    padding: 0.5rem;
  }

  li:hover {
    background-color: rgb(92, 128, 180, 0.3);
    -webkit-transition: background-color 1000ms ease;
    -ms-transition: background-color 1000ms ease;
    transition: background-color 1000ms ease;
    border-radius: 10px;
    display: block;
  }
  li {
    margin: 3rem 2rem;
    padding: 0.5rem;
    position: relative;
  }

  date {
    font-family: Verdana;
    font-size: 0.9em;
    padding: 0.5rem;
    position: absolute;
    display: block;
    right: 0;
  }

  @media (min-width: 1000px) {
    div {
      display: block;
    }

    span {
      font-size: 0.9rem;
      margin-left: 0;
      margin-top: -7px;
    }

    li {
      width: 100vh;
    }

    a {
      font-size: 1.3rem;
    }

    @media (min-width: 1000px) {
      div {
        display: block;
      }
    }
  }
`
