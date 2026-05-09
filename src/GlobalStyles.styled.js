import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  *:before, *:after { box-sizing: border-box; }
  a, a:visited { text-decoration: none; cursor: pointer; }
  button, ._btn { cursor: pointer; outline: none; }
  ul li { list-style: none; }

  @keyframes card-animation {
    0% { height: 0; opacity: 0; }
    100% { height: auto; opacity: 1; }
  }

  main {
    height: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media screen and (max-width: 495px) {
      padding: 0 16px;
    }
  }
  .react-loading-skeleton {
    --base-color: transparent;              
    --highlight-color: transparent;
    background-image: linear-gradient(
      90deg,
      #c1cddc 0%,
      #e9eef7 45.83%,
      #c1cddc 97.4%
    ) !important;
    background-size: 200% 100% !important;
    animation: skeleton-shimmer 1.5s ease-in-out infinite !important;
  }

  @keyframes skeleton-shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
