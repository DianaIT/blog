import css from "styled-jsx/css";

export const styles = css.global`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script&family=Poiret+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");

  @font-face {
    font-family: "Amatic";
    src: url("../../fonts/AmaticSC-Regular.ttf");
  }

  @font-face {
    font-family: "Amatic";
    src: url("../../fonts/AmaticSC-Regular.ttf");
  }

  main {
    min-height: 100vh;
    width: 100vh;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
    margin: 0.1;
    padding: 0.1;
  }

  h1 {
    font-size: 2.5rem;
    font-family: "Poiret One", cursive;
  }

  /* MIRAR POR QUÉ PASA ESTO */
  p > :global(img) {
    width: 100%;
  }

  img {
    width: 60%;
    margin: 0 auto;
  }
`;

export const blog = css`
  @font-face {
    font-family: "Mulish";
    src: url("../../fonts/Mulish-Regular.ttf");
  }

  div {
    display: none;
  }

  ul {
    list-style: none;
    width: 100vh;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    font-weight: 400;
  }

  li {
    margin: 3rem 0;
    padding: 0.5rem;
    border-bottom: 1px solid lightgrey;
    width: 93%;
  }

  span {
    font-family: Verdana;
    font-size: 1.2rem;
    padding: 1rem;
    padding-left: 0;
    float: right;
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
      padding: 0.2rem;
    }

    a {
      font-size: 1.3rem;
    }
  }
`;
/* MIRAR POR QUÉ PASA ESTO */
export const post = css`
  h1 {
    text-align: center;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 0.8rem;
  }
  article {
    font-family: Verdana;
    width: 90vh;
    margin: 0 auto;
    font-size: 1.6rem;
    text-align: justify;
  }

  :global(code) {
    font-size: 1rem;
  }

  .language-javascript {
    font-size: 0.6rem;
  }
  a {
    text-decoration: none;
    font-family: Verdana;
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    article {
      width: 80%;
      font-size: 1.1em;
    }

    :global(code) {
      font-size: 1.1rem;
    }
  }
`;
