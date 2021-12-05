import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #1b1b1b;
    --red-light: #fb7c7c;
    --red: #fa4a4a;
    --orange: #faa483;
    --fg: #e6e6e6;
    --text: #c0c0c0;
    --line: #444;
  }

  ::selection {
    background-color: var(--red-light);
    color: var(--background);
  }

  .container {
    position: relative;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Roboto', sans-serif;
    background: var(--background);
    color: var(--text);
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

`