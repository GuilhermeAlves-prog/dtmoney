import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f0f5;
    --red: #F75A68;
    --red-dark: #AA2834;

    --green: #00875F;
    --green-dark: #015F43;
    --green-light: #00B37E;

    --gray1: #121214;
    --gray2: #202024;
    --gray3: #29292E;
    --gray4: #323238;
    --gray5: #7C7C8A; //placeholder
    --gray6: #C4C4CC; //text base
    --gray7: #E1E1E6; //titulos
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 96.5%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--gray2);
    -webkit-font-smoothing: antialiased;
  }
  
  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    font-weight:400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:bold;
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: var(--gray2);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`