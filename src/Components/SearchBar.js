import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icon_calender from "../assets/icon_calender.svg";
import icon_search from "../assets/icon_search.svg";
import { BORDER_COLOR, WHITE_1 } from "../colors";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";

import { SMALL_WIDTH } from "../constants";

const Container = styled.div`
  height: 36px;
`;

const SearchInput = styled.div`
  border: 2px solid ${BORDER_COLOR};
  border-radius: 5px;
  display: flex;
  height: 36px;
  width: 300px;
  margin-bottom: 5px;
`;

const Left = styled.div`
  cursor: pointer;
  flex: 1;
  padding: 10px;
  user-select: none;
`;

const DateRange = styled.span`
  font-size: 18px;
  margin-left: 10px;
  pointer-events: none;
`;

const Right = styled.div`
  background-color: ${WHITE_1};
  border-left: 2px solid ${BORDER_COLOR};
  cursor: pointer;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20px;
  padding: 8px 10px;
  user-select: none;
`;

const Img = styled.img`
  height: 100%;
  pointer-events: none;
`;

const TODAY = moment();

export const SearchBar = ({ onSearch, ...props }) => {
  const inputEl = React.useRef(null);
  const [fromTo, setFromTo] = React.useState([TODAY, TODAY]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({
    startDate: TODAY,
    endDate: TODAY,
  });
  const [focusedInput, setFocusedInput] = React.useState("startDate");

  return (
    <Container>
      <SearchInput {...props}>
        <Left
          ref={inputEl}
          onClick={() => {
            if (!isOpen) {
              setDateRange({ startDate: fromTo[0], endDate: fromTo[1] });
              setIsOpen(true);
            }
          }}
        >
          <Img src={icon_calender} />
          <DateRange>
            {fromTo[0].format("YYYY/M/D")} - {fromTo[1].format("YYYY/M/D")}
          </DateRange>
        </Left>
        <Right
          onClick={() => {
            const { startDate, endDate } = dateRange;
            if (
              startDate &&
              endDate &&
              (startDate !== fromTo[0] || endDate !== fromTo[1])
            ) {
              setFromTo([startDate, endDate]);
              onSearch(startDate.toDate(), endDate.toDate());
            }
          }}
        >
          <Img src={icon_search} />
        </Right>
      </SearchInput>
      {isOpen && (
        <DayPickerRangeController
          numberOfMonths={window.innerWidth < SMALL_WIDTH ? 1 : 2}
          onOutsideClick={(event) => {
            if (event.target !== inputEl.current) {
              setIsOpen(false);
            }
          }}
          hideKeyboardShortcutsPanel="true"
          startDate={dateRange.startDate}
          startDateId="start_date_id"
          endDate={dateRange.endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            setDateRange({ startDate, endDate })
          }
          focusedInput={focusedInput}
          onFocusChange={(nextFocusedInput) =>
            setFocusedInput(
              nextFocusedInput === null ? "startDate" : nextFocusedInput
            )
          }
          isDayBlocked={(day) => day > TODAY}
        />
      )}
    </Container>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearch: function () {},
};

export default SearchBar;
