import css from "styled-jsx/css";

export const button = css`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  ul li {
    margin: 0.5rem 1rem;
    padding: 0.5rem 1.4rem;
    border-radius: 10px;
    font-family: "Poiret One";
    font-weight: bold;
    display: block;
    border: 1px solid white;
  }

  ul li:hover {
    background-color: lightgrey;
    color: black;
    border: 1px solid grey;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
