import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icon_calender from "../assets/icon_calender.svg";
import icon_search from "../assets/icon_search.svg";
import { BORDER_COLOR, WHITE_1, WHITE_3 } from "../colors";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";

import { BREAK_POINT_SM, SMALL_WIDTH } from "../constants";

const Container = styled.div`
  background-color: ${WHITE_1};
  height: 50px;
  padding: 8px 0;

  position: sticky;
  top: 0;
  z-index: 2;
`;

const SearchInput = styled.div`
  border: 2px solid ${BORDER_COLOR};
  border-radius: 5px;
  display: flex;
  width: 320px;
  margin-bottom: 5px;

  @media (max-width: ${BREAK_POINT_SM}) {
    width: 280px;
  }
`;

const Left = styled.div`
  cursor: pointer;
  flex: 1;
  padding: 10px;
  user-select: none;

  display: flex;
  align-items: center;
`;

const DateRange = styled.span`
  font-size: 1.125rem;
  margin-left: 10px;
  pointer-events: none;
`;

const Right = styled.div`
  background-color: ${WHITE_3};
  border-left: 2px solid ${BORDER_COLOR};
  cursor: pointer;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20px;
  padding: 8px 10px;
  user-select: none;
`;

const Img = styled.img`
  height: 20px;
  width: 20px;
  pointer-events: none;
`;

const TODAY = moment();

function renderDateText(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export const SearchBar = ({ onSearch, dateRange, ...props }) => {
  const inputEl = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [datePicker, setDatePicker] = React.useState({
    startDate: moment(dateRange.from),
    endDate: moment(dateRange.to),
  });
  const [focusedInput, setFocusedInput] = React.useState("startDate");

  return (
    <Container {...props}>
      <SearchInput>
        <Left
          ref={inputEl}
          onClick={() => {
            if (!isOpen) {
              setDatePicker({
                startDate: moment(dateRange.from),
                endDate: moment(dateRange.to),
              });
              setIsOpen(true);
            }
          }}
        >
          <Img src={icon_calender} alt="calender icon" />
          <DateRange>
            {renderDateText(dateRange.from)} - {renderDateText(dateRange.to)}
          </DateRange>
        </Left>
        <Right
          onClick={() => {
            const { startDate, endDate } = datePicker;
            if (
              startDate &&
              endDate &&
              (startDate.valueOf() !== dateRange.from.valueOf() ||
                endDate.valueOf() !== dateRange.to.valueOf())
            ) {
              onSearch(startDate.toDate(), endDate.toDate());
            }
          }}
        >
          <Img src={icon_search} alt="search icon" />
        </Right>
      </SearchInput>
      {isOpen && (
        <DayPickerRangeController
          minimumNights={0}
          numberOfMonths={window.innerWidth < SMALL_WIDTH ? 1 : 2}
          onOutsideClick={(event) => {
            if (event.target !== inputEl.current) {
              setIsOpen(false);
            }
          }}
          hideKeyboardShortcutsPanel={true}
          startDate={datePicker.startDate}
          endDate={datePicker.endDate}
          onDatesChange={({ startDate, endDate }) =>
            setDatePicker({
              startDate: startDate.hour(0),
              endDate: endDate ? endDate.hour(0) : startDate.hour(0),
            })
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
  onSearch: PropTypes.func.isRequired,
  dateRange: PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default SearchBar;
