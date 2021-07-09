import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const MainSectionInfo = styled.div`
  display: flex;
  height: 70vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ButtonBack = styled.button`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  // background-color: white;
  border-radius: 0.25em;
  padding: 0.8em 1.75em;
  border: none;
  margin: 2em 0;
  cursor: pointer;
  .back {
    margin-left: 0.5em;
    font-size: 1rem;
  }
`;

export const CountryDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin-left: 4rem;

  .border-country {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    padding: 0.25em 0.25em;
    border-radius: 0.25em;
    margin-left: 0.5em;
    margin-bottom: 0.35em;
  }
  .span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const CardImage = styled.img.attrs((props) => ({
  src: props.srcFlag,
}))`
  width: 100%;
`;

export const BoldTitle = styled.span`
  font-weight: bold;
`;

export const CountryContainerDetails = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CountryDetailsLeft = styled.div`
  flex: 1;
`;

export const CountryDetailsRight = styled.div`
  flex: 1;
`;
