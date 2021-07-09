import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 3px solid lightblue;
  @media (max-width: 580px) {
    font-size: 9px;
  }
`;

export const DarkModeBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  background: inherit;
  color: black;
  font-weight: bold;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 580px) {
    font-size: 13px;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
`;
