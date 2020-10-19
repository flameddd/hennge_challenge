import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SECONDARY_TEXT_COLOR } from "../colors";

const Container = styled.div`
  color: ${SECONDARY_TEXT_COLOR};
  font-size: 1.125rem;
  font-weight: bold;
  margin: 10px 0;
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
