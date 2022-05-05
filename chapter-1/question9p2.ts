const padZeroDates = (num: number): string => num.toString().padStart(2, "0");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getDayShort(date: Date): string {
  const index = date.getDay();
  return dayOfWeek[index - 1].substring(0, 3);
}

function getDayLong(date: Date): string {
  const index = date.getDay();
  return dayOfWeek[index - 1];
}

function getMonthShort(date: Date): string {
  const index = date.getMonth();
  return months[index].substring(0, 3);
}

function getMonthLong(date: Date): string {
  const index = date.getMonth();
  return months[index];
}

function getFullQuarter(): 1 | 2 | 3 | 4 {
  if (date.getMonth() < 2) {
    return 1;
  } else if (date.getMonth() < 5) {
    return 2;
  } else if (date.getMonth() < 8) {
    return 3;
  } else if (date.getMonth() < 11) {
    return 4;
  } else {
    return 1;
  }
}

function getFullDayOfMonth(date: Date): string {
  const day = date.getDate().toString();
  const splitted = day.split("");
  const secondDateChar = splitted[1];

  if ((secondDateChar === "1" && day !== "11") || day === "1") {
    return day + "st";
  } else if ((secondDateChar === "2" && day !== "12") || day === "2") {
    return day + "nd";
  } else if ((secondDateChar === "3" && day !== "13") || day === "3") {
    return day + "rd";
  } else if (
    secondDateChar > "3" ||
    day === "11" ||
    day === "12" ||
    day === "13"
  ) {
    return day + "th";
  }
  return "default";
}

function getWeek(): number {
  const janFirst = new Date(date.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((+date - +janFirst) / (24 * 60 * 60 * 1000));
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}

const fullDateTokens = {
  YYYY: (date: Date) => date.getFullYear(),
  MMMM: getMonthLong,
  MMM: getMonthShort,
  MM: (date: Date) => padZeroDates(date.getMonth()),
  M: (date: Date) => date.getMonth(),
  Do: getFullDayOfMonth,
  DD: (date: Date) => padZeroDates(date.getDate()),
  D: (date: Date) => date.getDate(),
  dddd: getDayLong,
  ddd: getDayShort,
  E: (date: Date): number => date.getDay(),
  HH: (date: Date) => padZeroDates(date.getHours()),
  H: (date: Date) => date.getHours(),
  mm: (date: Date) => padZeroDates(date.getMinutes()),
  m: (date: Date) => date.getMinutes(),
  ss: (date: Date) => padZeroDates(date.getSeconds()),
  s: (date: Date) => date.getSeconds(),
  Q: getFullQuarter,
  W: getWeek,
};

function formatSentence(date: Date, sentence: string): string {
  return Object.entries(fullDateTokens).reduce((result, [pattern, fun]) => {
    return result.replace(pattern, fun(date).toString());
  }, sentence);
}

const dateForFormat = new Date();
const formatingString =
  "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";

console.log(formatSentence(dateForFormat, formatingString));
