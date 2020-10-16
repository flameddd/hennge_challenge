import React from "react";
import styled from "styled-components";
import SearchBar from "./Components/SearchBar.js";
import ResultTitle from "./Components/ResultTitle.js";
import EmptyResult from "./Components/EmptyResult.js";
import Table from "./Components/Table.js";
import data from "./dataset";
import { BREAK_POINT_SM } from "./constants";

const Container = styled.div`
  padding: 30px 40px;
  height: 100vh;
  box-sizing: border-box;

  display: grid;
  grid-template-rows: auto auto 1fr;

  @media (max-width: ${BREAK_POINT_SM}) {
    padding: 0 5px;
    height: 100%;
  }
`;

const StyledTable = styled(Table)`
  @media (min-width: ${BREAK_POINT_SM}) {
    overflow: auto;
  }
`;

function App() {
  const [dateRange, setDateRange] = React.useState({
    from: new Date(2019, 10, 31, 0, 30, 0),
    to: new Date(2020, 0, 10, 0, 0, 0),
  });

  const filtedData = data.filter(
    (email) => email.date >= dateRange.from && email.date <= dateRange.to
  );

  return (
    <React.Fragment>
      <Container className="App">
        <SearchBar
          dateRange={dateRange}
          onSearch={(from, to) => setDateRange({ from, to })}
        />
        <ResultTitle count={filtedData.length} />
        {filtedData.length === 0 ? (
          <EmptyResult />
        ) : (
          <StyledTable data={filtedData} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
