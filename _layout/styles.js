import css from "styled-jsx/css"

export const styles = css.global`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica,
      Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    overflow-y: scroll;
  }

  main {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  /* ESTO ES PARA LAS SECCIONES DE CÓDIGO */
  p > :global(img) {
    width: 100%;
  }

  :global(p) {
    margin: 1rem 0;
  }

  :global(code) {
    font-size: 0.7em;
    margin: 0;
  }

  #__next > main > article > div > pre {
    background-color: lightgrey;
    padding: 1rem 2rem;
    border-radius: 10px;
  }

  #__next > main > article > div > p,
  #__next > main > article > div > h2 {
    padding: 0.6rem 0;
  }

  hr,
  h4,
  h3,
  li {
    margin: 1rem 0;
  }

  :global(svg) {
    padding-top: 5px;
  }

  @media (min-width: 1000px) {
    main {
      max-width: 70%;
    }

    :global(p) {
      margin: 1rem 0;
    }

    :global(code) {
      font-size: 0.9em;
    }
  }

  /* ESTO ES PARA LAS SECCIONES DE CÓDIGO */
`

export const blog = css`
  @font-face {
    font-family: "Mulish";
    src: url("../fonts/Mulish-Regular.ttf");
  }

  div {
    display: none;
  }

    ul {
      list-style: none;
      width: 100%;
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
      cursor: pointer;
      transition: background-color .4s linear;
    }

    button:hover,
    .active {
      background-color: #78A7C8;
    }

    a.button {
      text-decoration: none;
      color: black;
      font-size: 18px;
    }

ul {
    flex: 1 1;
    padding-right: var(--p-separation);
}


    @media (min-width: 1000px) {
      div {
        display: block;
      }
    }
  }
`
/* MIRAR POR QUÉ PASA ESTO */
export const post = css`
  @font-face {
    font-family: Roboto;
    src: url(../fonts/Roboto-Regular.ttf);
  }

  @font-face {
    font-family: "Poiret One";
    src: url(../fonts/PoiretOne-Regular.ttf);
  }

  h1 {
    font-size: 2.5rem;
    text-align: center;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 1rem;
    line-height: 1;
    margin-bottom: 2rem;
  }

  article {
    width: 100%;
    font-family: Roboto, Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    font-size: 1.1rem;
    word-break: break-word;
    color: #333;
  }

  div {
    min-width: 90%;
    width: 95%;
    margin: 0 auto;
    color: #333;
    overflow: hidden;
    font-family: Roboto, Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    line-height: 1.6;
    word-wrap: break-word;
  }

  h2 {
    margin: 1rem 0;
  }

  .language-javascript {
    font-size: 0.6rem;
  }
  a {
    text-decoration: none;
    font-family: Verdana;
    font-size: 1.2rem;
  }
  span {
    margin: 1rem;
  }

  @media (min-width: 1100px) {
    ¡ h1 {
      font-size: 3.5rem;
    }
    article {
      color: #333;
      font-size: 1.3rem;
      word-break: break-word;
    }

    :global(code) {
      font-size: 1rem;
    }
  }
`
