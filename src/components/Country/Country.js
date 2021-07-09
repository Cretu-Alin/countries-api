import React from "react";
import styled from "styled-components";
import { CountryCard, CountryBody, CardImg } from "../Styles/Country.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../utils/numberUtils";

const Country = ({ name, region, flag, population, capital, clickbale }) => {
  const history = useHistory();
  return (
    <CountryCard className="card" onClick={() => history.push("/contact")}>
      <div>
        <CardImg srcFlag={flag} />
      </div>
      <CountryBody>
        <h4>{name}</h4>
        <p>Population : {formatNumber(population)}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </CountryBody>
    </CountryCard>
  );
};

export default Country;
