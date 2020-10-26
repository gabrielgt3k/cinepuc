import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  body {
    background-color: #333;
  }
  body,
  input,
  button,
  textarea {
    font: 1.6rem 'Roboto';
  }
  @media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
  }
`;
