import React from "react";
import styled from "styled-components";
import { FaMoon } from "react-icons/fa";
import { HeaderStyle, DarkModeBtn, Span } from "../Styles/Header.styled";
import { Container } from "../Styles/Global.styled";

export default function Header({ toggleTheme }) {
  return (
    <div>
      <HeaderStyle>
        <Container>
          <h1>Where in the world?</h1>
          <DarkModeBtn onClick={toggleTheme} className="button">
            <FaMoon />
            <Span>Dark Mode</Span>
          </DarkModeBtn>
        </Container>
      </HeaderStyle>
    </div>
  );
}
