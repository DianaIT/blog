import css from "styled-jsx/css"

export default css`
  @font-face {
    font-family: "Mulish";
    src: url("../../fonts/Mulish-Regular.ttf");
  }

  a.articles {
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: bold;
    font-family: "Mulish", sans-serif, Verdana;
    font-weight: 400;
  }

  li.articles {
    width: 100vh;
    margin: 3rem 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid lightgrey;
  }

  span.articles {
    font-family: Verdana;
    font-size: 0.9em;
    padding: 0.5rem;
    float: right;
  }

  @media (min-width: 1000px) {
    div {
      display: block;
    }

    span.articles {
      font-size: 0.9rem;
      margin-left: 0;
      margin-top: -7px;
    }

    li.articles {
      width: 100vh;
    }

    a.articles {
      font-size: 1.3rem;
    }
  }
`
