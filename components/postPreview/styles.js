import css from "styled-jsx/css"

export default css`
  @font-face {
    font-family: "Mulish";
    src: url("../../fonts/Mulish-Regular.ttf");
  }

  a.articles {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: "Mulish", sans-serif, Verdana;
    font-weight: 400;
  }

  li.articles {
    margin: 3rem 0;
    padding: 0.5rem;
    border-bottom: 1px solid lightgrey;
    width: 93%;
  }

  span.articles {
    font-family: Verdana;
    font-size: 0.8rem;
    padding: 1rem;
    padding-left: 0;
    float: right;
    margin-top: -3px;
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
