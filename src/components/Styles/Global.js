import { createGlobalStyle } from "styled-components";
import { HeaderStyle } from "./Header.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  header{
    background: ${({ theme }) => theme.header};
  }

  .card{
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
  }

  .input{
    background: ${({ theme }) => theme.input}
  }

  .button{
    color: ${({ theme }) => theme.text};
  }

  .backButton{
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
  }


  `;
