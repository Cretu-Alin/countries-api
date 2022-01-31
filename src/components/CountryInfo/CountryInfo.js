import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  Container,
  MainSectionInfo,
  FlagContainer,
  CountryDetails,
  CardImage,
  BoldTitle,
  CountryDetailsLeft,
  CountryContainerDetails,
  CountryDetailsRight,
  ButtonBack,
} from "../Styles/CountryInfo.styled";
import { formatNumber } from "../../utils/numberUtils";

const CountryInfo = ({ countries }) => {
  const history = useHistory();
  const { state } = useLocation();
  const goHomeBtn = () => history.push("/");

  return (
    <Container>
      <ButtonBack onClick={() => goHomeBtn()} className="backButton">
        <FaArrowLeft />
        <span className="back">Go Back</span>
      </ButtonBack>
      <MainSectionInfo>
        <FlagContainer>
          <CardImage srcFlag={state.flag}></CardImage>
        </FlagContainer>
        <CountryDetails>
          <h2>{state.name}</h2>

          <CountryContainerDetails>
            <CountryDetailsLeft>
              <p>
                <BoldTitle>Native Name:</BoldTitle> {state.nativeName}
              </p>
              <p>
                <BoldTitle>Population:</BoldTitle>{" "}
                {formatNumber(state.population)}
              </p>
              <p>
                <BoldTitle>Region:</BoldTitle> {state.region}
              </p>
              <p>
                <BoldTitle>Sub Region:</BoldTitle> {state.subregion}
              </p>
              <p>
                <BoldTitle>Capital:</BoldTitle> {state.capital}
              </p>
            </CountryDetailsLeft>
            <CountryDetailsRight>
              <p>
                <BoldTitle>Top Level Domain: </BoldTitle>
                {state.topLevelDomain.map((domain) => {
                  return domain;
                })}
              </p>
              <p>
                <BoldTitle>Currencies: </BoldTitle>

                {state.currencies &&
                  state.currencies.map((currency, index) => {
                    return state.currencies.length > 1 &&
                      index < state.currencies.length - 1
                      ? `${currency.name}, `
                      : currency.name;
                  })}
              </p>
              <p>
                <BoldTitle>Languages: </BoldTitle>
                {state.languages.map((language, index) => {
                  return state.languages.length > 1 &&
                    index < state.languages.length - 1
                    ? `${language.name}, `
                    : language.name;
                })}
              </p>
            </CountryDetailsRight>
          </CountryContainerDetails>
          <div className="span">
            Border Countries:
            {state.borders && state.borders.length > 0 ? (
              state.borders.map((border) => {
                return (
                  <span key={border} className="border-country">
                    {border}
                  </span>
                );
              })
            ) : (
              <p className="border">No border countries</p>
            )}
          </div>
        </CountryDetails>
      </MainSectionInfo>
    </Container>
  );
};

export default CountryInfo;
