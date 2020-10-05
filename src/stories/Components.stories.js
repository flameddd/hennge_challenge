import React from "react";

import Layout from "../Components/Layout.js";
import ResultTitle from "../Components/ResultTitle.js";
import SearchBar from "../Components/SearchBar.js";
import EmptyResult from "../Components/EmptyResult.js";
import TableComponent from "../Components/Table.js";

import data from "../dataset";

export default {
  title: "Components",
  component: Layout,
  subcomponents: [ResultTitle, SearchBar, EmptyResult, TableComponent],
};

export const LayoutTemp = (args) => <Layout {...args} />;
export const ResultTitleTemp = (args) => <ResultTitle {...args} />;
export const SearchBarTemp = (args) => <SearchBar {...args} />;
export const EmptyResultTemp = (args) => (
  <div style={{ height: "500px" }}>
    <EmptyResult {...args} />
  </div>
);
export const Table = (args) => <TableComponent data={data} {...args} />;
