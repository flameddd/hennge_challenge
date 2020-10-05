import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar.js";
import ResultTitle from "./ResultTitle.js";
import EmptyResult from "./EmptyResult.js";

const Container = styled.div``;

export const Layout = (props) => (
  <Container {...props}>
    <SearchBar />
    <ResultTitle />
    <EmptyResult />
  </Container>
);

export default Layout;
