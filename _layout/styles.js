import css from "styled-jsx/css"

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
    margin: 0 auto;
    width: 100vh;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * {
    box-sizing: border-box;
    margin: 0.1rem;
    padding: 0.1rem;
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
`

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
  }
 
  ul.button {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  } 

  ul.button li {
    margin: 0.5rem 1rem;
    padding: 0.5rem 1.4rem;
    border-radius: 10px;
    font-family: "Poiret One";
    font-weight: bold;
    display: block;
    border: 1px solid white;
  }

  button {
    padding: 0.7rem 3rem;
    border-radius: 10px;
    border: none;
    background: none;
    outline: none;
  }

  button:hover,
  .active {
    background-color: lightgrey;
  }

  a.button {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

    @media (min-width: 1000px) {
  div {
    display:block;
  }
  }

  }
`
/* MIRAR POR QUÉ PASA ESTO */
export const post = css`
  h1 {
    text-align: center;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 0.8rem;
    line-height: 1;
  }
  article {
    font-family: Verdana;
    width: 95%;
    margin: 0 auto;
    font-size: 1.2rem;
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
      color: #333;
      font-size: 18px;
      line-height: 28px;
      width: 90%;
    }

    :global(code) {
      font-size: 1rem;
    }
  }
`
