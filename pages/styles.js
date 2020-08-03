import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script&family=Poiret+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");

  main {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * {
    box-sizing: border-box;
    margin: 0.2;
    padding: 0.2;
  }

  h1 {
    font-size: 2.5rem;
    font-family: "Poiret One", cursive;
  }
  img {
    width: 60%;
    margin: 0 auto;
  }
`;

export const blog = css`
  @import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap");
  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
    margin-left: -28px;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: bold;
    font-family: "Mulish", sans-serif;
  }

  li {
    margin: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid lightgrey;
    width: 100%;
  }

  span {
    font-family: "Poiret One";
    font-weight: bold;
    float: right;
    padding-top: 15px;
  }
`;

export const post = css`
  h1 {
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
  article {
    font-family: Verdana;
    width: 80%;
    margin: 0 auto;
    text-align: justify;
  }

  a {
    text-decoration: none;
    font-family: Verdana;
    font-size: 1.2rem;
  }

  a img {
    width: 30px;
  }

  @media (min-width: 1000px) {
    article {
      width: 60%;
    }
  }
`;
