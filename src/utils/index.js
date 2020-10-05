import { SORT_OPTIONS } from "../constants";

export function fillDateDigital(date) {
  if (typeof date !== "number") return "";
  if (`${date}`.length === 1) return `0${date}`;
  return `${date}`;
}

export function dateTimeFormatter(base, archiveDate) {
  // return "hours:Minutes" formate if same day with base date
  // return "Jan 01" formate if same month with base date
  // default return "2019/12/31" formate

  try {
    if (!(base instanceof Date) || !(archiveDate instanceof Date)) {
      throw new Error("Parameters must be Date formate!");
    }

    const [
      baseDateYear,
      baseMonth,
      baseDate,
      archiveYear,
      archiveMonth,
      date,
    ] = [
      base.getFullYear(),
      base.getMonth(),
      base.getDate(),
      archiveDate.getFullYear(),
      archiveDate.getMonth(),
      archiveDate.getDate(),
    ];

    if (
      baseDateYear === archiveYear &&
      baseMonth === archiveMonth &&
      baseDate === date
    ) {
      return `${archiveDate.getHours()}:${fillDateDigital(
        archiveDate.getMinutes()
      )}`;
    }

    if (baseDateYear === archiveYear && baseMonth === archiveMonth) {
      return `${archiveDate.toLocaleString("en", {
        month: "short",
      })} ${fillDateDigital(date)}`;
    }

    return `${archiveYear}/${fillDateDigital(
      archiveMonth + 1
    )}/${fillDateDigital(date)}`;
  } catch (error) {
    return "";
  }
}

export function sortMail({ data, sortField, orderBy }) {
  return data.sort((a, b) => {
    if (sortField === SORT_OPTIONS.FROM_FIELD) {
      // sort email.from field, case insensitive.
      return orderBy === SORT_OPTIONS.ORDER_BY_DESC
        ? a[sortField].toLowerCase().localeCompare(b[sortField].toLowerCase())
        : b[sortField].toLowerCase().localeCompare(a[sortField].toLowerCase());
    }

    // sort email.ArchiveDate
    return orderBy === SORT_OPTIONS.ORDER_BY_DESC
      ? a[sortField] < b[sortField]
      : a[sortField] > b[sortField];
  });
}
