import css from "styled-jsx/css"

export default css`
  .snip1226 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    margin: 1rem 0 0 0;
  }
  .snip1226 * {
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
  .snip1226 li {
    display: inline-block;
    list-style: outside none none;
    margin: 0 1em;
    overflow: hidden;
  }
  .snip1226 a {
    padding: 0.3em 0;
    color: #719fb0;
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    text-decoration: none;
  }
  .snip1226 a:before,
  .snip1226 a:after {
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
  .snip1226 a:before {
    bottom: 100%;
    display: block;
    height: 3px;
    width: 100%;
    content: "";
    background-color: #47636e;
  }
  .snip1226 a:after {
    padding: 0.3em 0;
    position: absolute;
    bottom: 100%;
    left: 0;
    content: attr(data-hover);
    color: #557784;
    white-space: nowrap;
  }
  .snip1226 li:hover a,
  .snip1226 .current a {
    transform: translateY(100%);
  }
`
