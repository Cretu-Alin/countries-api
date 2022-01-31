import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { CountryContainer } from "./components/Styles/Global.styled";
import Search from "./components/Search/Search";
import axios from "axios";
import Country from "./components/Country/Country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, lightHeader } from "./components/Styles/Theme";
import { GlobalStyles } from "./components/Styles/Global";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const url = "https://restcountries.com/v2/all";

    axios
      .get(url)
      .then((resp) => {
        setCountries(resp.data);
        console.log(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />

        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/" exact>
            <Search handleChange={handleChange} searchTerm={searchTerm} />
            <CountryContainer>
              {countries.length > 0 &&
                countries
                  .filter((country) => {
                    return country.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                  })
                  .map((country) => (
                    <Link to={{ state: country }} key={country.alpha2Code}>
                      <Country key={country.alpha2Code} {...country} />
                    </Link>
                  ))}
            </CountryContainer>
          </Route>
          <Route path="/contact" exact>
            <CountryInfo countries={countries} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
