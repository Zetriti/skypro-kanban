import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
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

  ._hover01:hover {
    background-color: #33399b;
  }

  ._hover02:hover {
    color: #33399b;
    
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }

  ._hover03:hover {
    background-color: #33399b;
    color: #ffffff;
    
    a {
      color: #ffffff;
    }
  }

  ._orange {
    background-color: #ffe4c2;
    color: #ff6d00;
  }

  ._green {
    background-color: #b4fdd1;
    color: #06b16e;
  }

  ._purple {
    background-color: #e9d4ff;
    color: #9a48f1;
  }

  ._gray {
    background: #94a6be;
    color: #ffffff;
  }

  ._active-category {
    opacity: 1 !important;
  }

  .pop-wrap {
    position: relative;
    top: 0;
    left: 0;
  }

  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    background: transparent;
    color: #565eef;
    
    a {
      color: #565eef;
    }
  }

  ._btn-bg {
    border-radius: 4px;
    background: #565eef;
    border: none;
    outline: none;
    color: #ffffff;
    
    a {
      color: #ffffff;
    }
  }

  ._hide {
    display: none;
  }

  ._dark {
    display: none;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  text-align: center;
`;
