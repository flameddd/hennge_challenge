import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SECONDARY_TEXT_COLOR } from "../colors";

const Container = styled.div`
  color: ${SECONDARY_TEXT_COLOR};
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px;
`;

export const ResultTitle = ({ count, ...props }) => (
  <Container {...props}>Results: {count} mail(s)</Container>
);

ResultTitle.propTypes = {
  count: PropTypes.number.isRequired,
};

ResultTitle.defaultProps = {
  count: 0,
};

export default ResultTitle;
