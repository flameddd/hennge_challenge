import React from "react";
import styled from "styled-components";
import DatePicker from "./Components/DatePicker.js";
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
    from: new Date(2019, 11, 31),
    to: new Date(2020, 0, 3),
  });

  const filtedData = data.filter(({ date }) => {
    const mailDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    return mailDate >= dateRange.from && mailDate <= dateRange.to;
  });

  return (
    <React.Fragment>
      <Container className="App">
        <DatePicker
          dateRange={dateRange}
          onSearch={(from, to) => setDateRange({ from, to })}
        />
        <ResultTitle count={filtedData.length} />
        {filtedData.length === 0 ? (
          <EmptyResult />
        ) : (
          <StyledTable data={filtedData} toDate={dateRange.to} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
