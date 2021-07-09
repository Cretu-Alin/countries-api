import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Container } from "../Styles/Global.styled";
import {
  SearchFilter,
  InputAbsolute,
  Input,
  Form,
  Select,
} from "../Styles/Search.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Search({ searchTerm, handleChange }) {
  return (
    <Container>
      <SearchFilter>
        <InputAbsolute>
          <Input
            className="input"
            type="text"
            placeholder="Search for a country..."
            onChange={handleChange}
            value={searchTerm}
          />
          <FaSearch className="search-icon" />
        </InputAbsolute>
      </SearchFilter>
    </Container>
  );
}
