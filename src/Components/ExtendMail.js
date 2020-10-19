import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BORDER_COLOR } from "../colors";

const Container = styled.div`
  border-right: 1px solid ${BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};
  padding: 0 15px;
`;

const Subject = styled.h1`
  border-bottom: 1px solid ${BORDER_COLOR};
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 26px;
  margin: 0;
  padding: 10px 0 6px 0;
  word-break: break-word;
`;

const FromTo = styled.div`
  word-break: break-all;
  padding: 4px 0;
  border-bottom: 1px solid ${BORDER_COLOR};
`;

const Bold = styled.span`
  display: inline-block;
  font-weight: bold;
  width: 50px;
`;

const Body = styled.div`
  padding: 20px 0;
`;

const Time = styled.span``;

function dateToTime(date) {
  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${date.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

const ExtendMail = ({ from, to, subject, body, date, ...props }) => (
  <Container {...props}>
    <Subject>{subject}</Subject>
    <FromTo>
      <Bold>From:</Bold>
      <a href={`mailto:${from}`}>{from}</a>
      <Time>{` (${dateToTime(date)})`}</Time>
    </FromTo>
    <FromTo>
      <Bold>To:</Bold>
      {to.join(", ")}
    </FromTo>
    <Body>{body}</Body>
  </Container>
);

ExtendMail.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.arrayOf(PropTypes.string).isRequired,
  metadata: PropTypes.string,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  attachment: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date),
};

ExtendMail.defaultProps = {
  metadata: "",
};

export default ExtendMail;
