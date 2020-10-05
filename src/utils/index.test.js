import { fillDateDigital, dateTimeFormatter, sortMail } from "./index";

describe("fillDateDigital test", () => {
  test('expect return "", when typeof input is NOT "number"', () => {
    const input1 = "1";
    const input2 = [];
    const input3 = function () {};
    expect(fillDateDigital(input1)).toEqual("");
    expect(fillDateDigital(input2)).toEqual("");
    expect(fillDateDigital(input3)).toEqual("");
  });

  test('expect return string with "0 prefix", when input is ONE digital number', () => {
    const prefix = "0";
    const input1 = 1;
    const input2 = 3;
    const input3 = 0;
    expect(fillDateDigital(input1)).toEqual(`${prefix}${input1}`);
    expect(fillDateDigital(input2)).toEqual(`${prefix}${input2}`);
    expect(fillDateDigital(input3)).toEqual(`${prefix}${input3}`);
  });

  test('expect return input string", when input is more than ONE digital number', () => {
    const input1 = 11;
    const input2 = 10;
    const input3 = 12;
    expect(fillDateDigital(input1)).toEqual(`${input1}`);
    expect(fillDateDigital(input2)).toEqual(`${input2}`);
    expect(fillDateDigital(input3)).toEqual(`${input3}`);
  });
});

describe("dateTimeFormatter test", () => {
  let baseDate;

  beforeAll(() => {
    baseDate = new Date(2020, 0, 3, 0, 20, 0);
  });

  // return "hours:Minutes" format if same date with baseDate
  // return "Jan 01" format if same month with base date
  // default return "2019/12/31" format

  test('expect return "" when either input or baseDate is NOT date format', () => {
    const input1 = new Date(2020, 0, 3, 0, 0, 0);
    const input2 = "";

    expect(dateTimeFormatter("", input1)).toEqual("");
    expect(dateTimeFormatter(baseDate, input2)).toEqual("");
    expect(dateTimeFormatter("", input2)).toEqual("");
  });

  test('expect return "hours:Minutes" format when input is same date with baseDate', () => {
    const input = new Date(2020, 0, 3, 0, 0, 0);
    const [hour, minutes] = [input.getHours(), input.getMinutes()];
    const expect1 = `${hour}:${fillDateDigital(minutes)}`;

    expect(dateTimeFormatter(baseDate, input)).toEqual(expect1);
  });

  test('expect return "hours:Minutes" format when input is same month and date with baseDate', () => {
    const input = new Date(2020, 0, 1, 0, 0, 0);
    const date = input.getDate();

    const expect1 = `${input.toLocaleString("en", {
      month: "short",
    })} ${fillDateDigital(date)}`;

    expect(dateTimeFormatter(baseDate, input)).toEqual(expect1);
  });

  test('expect return "year/month/date" format when input is NOT same month or same date with baseDate', () => {
    const input = new Date(2020, 1, 3, 0, 0, 0);
    const [yeat, month, date] = [
      input.getFullYear(),
      input.getMonth(),
      input.getDate(),
    ];

    const expect1 = `${yeat}/${fillDateDigital(month + 1)}/${fillDateDigital(
      date
    )}`;
    expect(dateTimeFormatter(baseDate, input)).toEqual(expect1);
  });
});

describe("sortMail test", () => {
  let data;
  const email1 = {
    from: "aaa@example.com",
    date: new Date(2020, 0, 3, 0, 20, 0),
  };
  const email2 = {
    from: "bbb.bbbb@exam.com.jp",
    date: new Date(2020, 0, 3, 0, 10, 0),
  };
  const email3 = {
    from: "ccc@example.com",
    date: new Date(2020, 0, 3, 0, 0, 0),
  };

  beforeEach(() => {
    data = [email1, email2, email3];
  });

  test('expect return array data order by "from" field', () => {
    const expectOrderByASC = [email1, email2, email3];
    const expectOrderByDESC = [email3, email2, email1];
    expect(sortMail({ data, sortField: "from", orderBy: "asc" })).toEqual(
      expectOrderByASC
    );
    expect(sortMail({ data, sortField: "from", orderBy: "desc" })).toEqual(
      expectOrderByDESC
    );
  });

  test('expect return array data order by "date" field', () => {
    const expectOrderByASC = [email3, email2, email1];
    const expectOrderByDESC = [email1, email2, email3];
    expect(sortMail({ data, sortField: "date", orderBy: "asc" })).toEqual(
      expectOrderByASC
    );
    expect(sortMail({ data, sortField: "date", orderBy: "desc" })).toEqual(
      expectOrderByDESC
    );
  });
});
