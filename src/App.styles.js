import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled("div")`
	height: 100vh;
	width: 100vw;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme: { backgroundA } }) => backgroundA};
    color: ${({ theme: { whiteColor } }) => whiteColor};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h2,p{
    margin: 0;
  }

  button{
    border: none;
    font-size: inherit;
    color: inherit;
  }
`;