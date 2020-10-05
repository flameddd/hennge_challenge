import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ReactComponent as Clip } from "../assets/icon_clip.svg";
import { ReactComponent as Icon_arrow01 } from "../assets/icon_arrow01.svg";
import { ReactComponent as Icon_arrow02 } from "../assets/icon_arrow02.svg";
import { ReactComponent as Icon_mail_sp } from "../assets/icon_mail_sp.svg";
import { BREAK_POINT_SM, SORT_OPTIONS } from "../constants";
import { dateTimeFormatter, sortMail } from "../utils";

import {
  BORDER_COLOR,
  WHITE_1,
  SECONDARY_TEXT_COLOR,
  VIVID_NAVY_1,
  WHITE_4,
  GRAY_4,
  BLACK_1,
} from "../colors";

const test = new Date(2020, 0, 3, 0, 20, 0);

const svgFillColor = css`
  polygon {
    fill: ${BLACK_1};
  }
`;

const fontBoldStyle = css`
  color: ${BLACK_1};
  font-weight: bold;
`;

const ellipsisText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Container = styled.div``;

const Header = styled.div`
  background-color: ${WHITE_1};
  border-bottom: 1px solid ${BORDER_COLOR};
  border-top: 1px solid ${BORDER_COLOR};
  color: ${SECONDARY_TEXT_COLOR};
  font-size: 18px;
  padding: 10px;
  user-select: none;

  align-items: center;
  display: grid;
  grid-template-columns: 150px 250px 6fr 1fr;
  grid-column-gap: 20px;

  @media (max-width: ${BREAK_POINT_SM}) {
    display: block;
    font-size: 16px;

    > span {
      padding: 0 8px;
    }

    > span:not(:last-child) {
      border-right: 1px solid ${BORDER_COLOR};
    }
  }
`;

const SortableHeaderItem = styled.span`
  cursor: pointer;

  ${(props) => props.isHighlightField && fontBoldStyle}
`;

const Text = styled.span`
  ${ellipsisText}
`;

const Cell = styled.div`
  ${ellipsisText}

  ${(props) => props.isHighlightField && fontBoldStyle}
`;

const StyledArrow2 = styled(Icon_arrow02)`
  height: 8px;
  width: auto;

  ${svgFillColor}
`;

const MobileArchiveDate = styled.span`
  font-weight: normal;
  ${(props) => props.isHighlightField && fontBoldStyle}
`;

const From = styled(Cell)`
  > ${MobileArchiveDate}, ${StyledArrow2} {
    display: none;
  }

  @media (max-width: ${BREAK_POINT_SM}) {
    font-size: 18px;

    grid-area: mailFrom;

    display: grid;
    grid-template-columns: auto min-content min-content min-content;
    align-items: center;
    grid-column-gap: 5px;

    > ${MobileArchiveDate}, ${StyledArrow2} {
      display: block;
    }
  }
`;

const Tag = styled.div`
  background-color: ${GRAY_4};
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0 4px;

  display: flex;
  justify-content: center;
`;

const To = styled(Cell)`
  > ${Tag} {
    display: none;
  }

  @media (max-width: ${BREAK_POINT_SM}) {
    font-size: 18px;

    grid-area: mailTo;

    align-items: center;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto min-content;

    > ${Tag} {
      display: block;
    }
  }
`;

const Subject = styled(Cell)`
  @media (max-width: ${BREAK_POINT_SM}) {
    grid-area: mailSubject;
  }
`;

const MetaData = styled(Cell)``;
const Attachment = styled(Cell)``;
const ArchiveDate = styled(Cell)``;

const TableItem = styled.div`
  border-bottom: 1px solid ${BORDER_COLOR};

  display: grid;
  grid-template-columns: 150px 200px 30px 6fr 15px 1fr;
  grid-column-gap: 20px;
  align-items: center;

  font-size: 20px;
  cursor: pointer;
  padding: 10px;

  :hover {
    background-color: ${WHITE_4};
    color: ${VIVID_NAVY_1};

    path {
      fill: ${VIVID_NAVY_1};
    }
  }

  @media (max-width: ${BREAK_POINT_SM}) {
    grid-template-columns: 25px auto;
    grid-template-rows: 0.8fr 0.8fr 1fr;
    grid-template-areas:
      "icon_mail_sp mailFrom"
      "icon_mail_sp mailTo"
      "mailSubject mailSubject";
    grid-gap: 5px;

    padding: 10px;

    > ${Attachment}, ${MetaData}, ${ArchiveDate} {
      display: none;
    }
  }
`;

const StyledClip = styled(Clip)`
  height: 16px;
  width: 16px;
`;

const StyledArrow = styled(Icon_arrow01)`
  height: 10px;
  width: 10px;

  ${svgFillColor}

  ${(props) => props.isDESC && "transform: rotate(180deg);"}
`;

const StyledIcon_mail_sp = styled(Icon_mail_sp)`
  display: none;

  ${svgFillColor}

  @media (max-width: ${BREAK_POINT_SM}) {
    display: block;
    height: 35px;

    grid-area: icon_mail_sp;
    justify-self: center;
  }
`;

export const Table = ({ data, ...props }) => {
  const [sort, setSort] = React.useState({
    field: SORT_OPTIONS.DATE_FIELD,
    orderBy: SORT_OPTIONS.ORDER_BY_DESC,
  });

  const onSetOrderBy = () =>
    sort.orderBy === SORT_OPTIONS.ORDER_BY_DESC
      ? setSort({ field: sort.field, orderBy: SORT_OPTIONS.ORDER_BY_ASC })
      : setSort({ field: sort.field, orderBy: SORT_OPTIONS.ORDER_BY_DESC });
  const onSetSortField = (field) =>
    field !== sort.field
      ? setSort({ field, orderBy: SORT_OPTIONS.ORDER_BY_DESC })
      : onSetOrderBy();

  const sortedDate = sortMail({
    data,
    sortField: sort.field,
    orderBy: sort.orderBy,
  });

  return (
    <Container {...props}>
      <Header>
        <SortableHeaderItem
          isHighlightField={sort.field === SORT_OPTIONS.FROM_FIELD}
          onClick={() => onSetSortField(SORT_OPTIONS.FROM_FIELD)}
        >
          From{" "}
          {sort.field === SORT_OPTIONS.FROM_FIELD && (
            <StyledArrow isDESC={sort.orderBy === SORT_OPTIONS.ORDER_BY_DESC} />
          )}
        </SortableHeaderItem>
        <span>To</span>
        <span>Subject</span>
        <SortableHeaderItem
          isHighlightField={sort.field === SORT_OPTIONS.DATE_FIELD}
          onClick={() => onSetSortField(SORT_OPTIONS.DATE_FIELD)}
        >
          Date{" "}
          {sort.field === SORT_OPTIONS.DATE_FIELD && (
            <StyledArrow isDESC={sort.orderBy === SORT_OPTIONS.ORDER_BY_DESC} />
          )}
        </SortableHeaderItem>
      </Header>
      {sortedDate.map((email) => (
        <TableItem key={email.subject}>
          <StyledIcon_mail_sp />
          <From isHighlightField={sort.field === SORT_OPTIONS.FROM_FIELD}>
            <Text>{email.from}</Text>
            {email.attachment && <StyledClip />}
            <MobileArchiveDate
              isHighlightField={sort.field === SORT_OPTIONS.DATE_FIELD}
            >
              {dateTimeFormatter(test, email.date)}
            </MobileArchiveDate>
            <StyledArrow2 />
          </From>
          <To>
            <Text>{email.to.join(",")}</Text>
            {email.metadata && <Tag>{email.metadata}</Tag>}
          </To>
          <MetaData>{email.metadata && <Tag>{email.metadata}</Tag>}</MetaData>
          <Subject>{email.subject}</Subject>
          <Attachment>{email.attachment && <StyledClip />}</Attachment>
          <ArchiveDate
            isHighlightField={sort.field === SORT_OPTIONS.DATE_FIELD}
          >
            {dateTimeFormatter(test, email.date)}
          </ArchiveDate>
        </TableItem>
      ))}
    </Container>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.arrayOf(PropTypes.string).isRequired,
      metadata: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      attachment: PropTypes.bool.isRequired,
      date: PropTypes.instanceOf(Date),
    })
  ),
};

Table.defaultProps = {
  data: [],
};

export default Table;
