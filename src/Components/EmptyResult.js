import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BORDER_COLOR } from "../colors";

const Container = styled.div`
  border-top: 1px solid ${BORDER_COLOR};
  display: flex;
`;

const Logo = styled.img`
  height: 125px;
  margin: 125px auto;
`;

export const EmptyResult = (props) => (
  <Container {...props}>
    <Logo src={logo} />
  </Container>
);

export default EmptyResult;
