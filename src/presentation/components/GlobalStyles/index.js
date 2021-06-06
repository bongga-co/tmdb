import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'RobotoBold';
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #333333;
    outline: none;
  }

  i {
    vertical-align: -7.5px;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  hr {
    border-color: #333333;
    border-style: solid;
  }

  /* General Styles */

  body {
    background: #fafffa;
    font-family: 'Roboto';
    color: #333333;
    line-height: normal;
    width: 100vw;
    line-height: 1;
    overflow-x: hidden;
    font-size: 16px;

    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  h1 {
    font-size: 1.8em;
    font-family: 'RobotoBold';
    line-height: 1.5em;
  }

  h2 {
    font-size: 1.5em;
    font-family: 'Roboto';
    line-height: 1.5em;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 400;
  }

  h4 {
    font-size: 1.1em;
  }

  p, span {
    font-size: 1em;
    line-height: 1.5em;
  }

`