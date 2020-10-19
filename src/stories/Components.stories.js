import React from "react";

import ResultTitleComponent from "../Components/ResultTitle.js";
import SearchBarComponent from "../Components/SearchBar.js";
import EmptyResultComponent from "../Components/EmptyResult.js";
import TableComponent from "../Components/Table.js";
import ExtendMailComponent from "../Components/ExtendMail";

import data from "../dataset";

export default {
  title: "Components",
  component: ResultTitleComponent,
  subcomponents: [
    SearchBarComponent,
    EmptyResultComponent,
    TableComponent,
    ExtendMailComponent,
  ],
};

export const ResultTitle = (args) => <ResultTitleComponent {...args} />;
export const SearchBar = (args) => {
  const [dateRange, setDateRange] = React.useState({
    from: new Date(2019, 10, 31, 0, 30, 0),
    to: new Date(2020, 0, 10, 0, 0, 0),
  });
  return (
    <SearchBarComponent
      {...args}
      dateRange={dateRange}
      onSearch={(from, to) => setDateRange({ from, to })}
    />
  );
};
export const EmptyResult = (args) => (
  <div style={{ height: "500px" }}>
    <EmptyResultComponent {...args} />
  </div>
);
export const Table = (args) => <TableComponent data={data} {...args} />;
export const ExtendMail = (args) => {
  const { from, to, metaData, subject, body, attachment, date } = data[0];
  return (
    <ExtendMailComponent
      from={from}
      to={to}
      metaData={metaData}
      subject={`${subject}`}
      body={body}
      attachment={attachment}
      date={date}
      {...args}
    />
  );
};
