import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BORDER_COLOR } from "../colors";

const Container = styled.div`
  border-top: 1px solid ${BORDER_COLOR};
  min-height: 300px;

  display: grid;
  place-content: center;
`;

export const EmptyResult = (props) => (
  <Container {...props}>
    <img src={logo} />
  </Container>
);

export default EmptyResult;
