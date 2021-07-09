import styled from "styled-components";

export const CountryCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
  width: 400px;
  text-decoration: none;

  @media (max-width: 580px) {
    width: 340px;
  }
`;

export const CountryBody = styled.div`
  padding: 30px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const CardImg = styled.img.attrs((props) => ({
  src: props.srcFlag,
}))`
  max-width: 100%;
  height: 300px;
  width: 100%;
  object-fit: cover;
`;
