import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icon_calender from "../assets/icon_calender.svg";
import icon_search from "../assets/icon_search.svg";
import { BORDER_COLOR, WHITE_1 } from "../colors";

const Container = styled.div`
  border: 2px solid ${BORDER_COLOR};
  border-radius: 5px;
  display: flex;
  height: 36px;
  overflow: hidden;
  width: 300px;
`;

const Left = styled.div`
  cursor: pointer;
  flex: 1;
  padding: 10px;
`;

const DateRange = styled.span`
  font-size: 18px;
  margin-left: 10px;
`;

const Right = styled.div`
  background-color: ${WHITE_1};
  border-left: 2px solid ${BORDER_COLOR};
  cursor: pointer;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20px;
  padding: 8px 10px;
`;

const Img = styled.img`
  height: 100%;
`;

export const SearchBar = ({ from, to, onSearch, ...props }) => (
  <Container {...props}>
    <Left>
      <Img src={icon_calender} />
      <DateRange>
        {from} - {to}
      </DateRange>
    </Left>
    <Right onClick={onSearch}>
      <Img src={icon_search} />
    </Right>
  </Container>
);

SearchBar.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  from: "2020/1/1",
  to: "2020/1/1",
  onSearch: function () {},
};

export default SearchBar;
