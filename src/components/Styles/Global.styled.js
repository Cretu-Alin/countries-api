import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const CountryContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  // grid-template-columns: repeat(3, auto);
  // // grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: space-between;

  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;

  @media (max-width: 1164px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
