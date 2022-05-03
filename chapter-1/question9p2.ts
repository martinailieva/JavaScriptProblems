const padZero = (num: number) => num.toString().padStart(2, "0");

const monthName = [
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
const dayOfWeekName = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getDayShortName(date) {
  const index = date.getDay();
  return dayOfWeekName[index - 1].substring(0, 3);
}

function getDayLongName(date) {
  const index = date.getDay();
  return dayOfWeekName[index - 1];
}

function getMonthShortName(date) {
  const index = date.getMonth();
  return monthName[index].substring(0, 3);
}

function getMonthLongName(date) {
  const index = date.getMonth();
  return monthName[index];
}

function getQuarter() {
  if (date.getMonth() < 2) {
    return 1;
  } else if (date.getMonth() < 5) {
    return 2;
  } else if (date.getMonth() < 8) {
    return 3;
  } else if (date.getMonth() < 11) {
    return 4;
  }
}

function getDayOfMonth(date: Date) {
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
}

function getWeekOfYear() {
  const janFirst = new Date(date.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((+date - +janFirst) / (24 * 60 * 60 * 1000));
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}

const dateTokens = {
  YYYY: (date: Date) => date.getFullYear(),
  MMMM: getMonthLongName,
  MMM: getMonthShortName,
  MM: (date: Date) => padZero(date.getMonth()),
  M: (date: Date) => date.getMonth(),
  Do: getDayOfMonth,
  DD: (date: Date) => padZero(date.getDate()),
  D: (date: Date) => date.getDate(),
  dddd: getDayLongName,
  ddd: getDayShortName,
  E: (date: Date): number => date.getDay(),
  HH: (date: Date) => padZero(date.getHours()),
  H: (date: Date) => date.getHours(),
  mm: (date: Date) => padZero(date.getMinutes()),
  m: (date: Date) => date.getMinutes(),
  ss: (date: Date) => padZero(date.getSeconds()),
  s: (date: Date) => date.getSeconds(),
  Q: getQuarter,
  W: getWeekOfYear,
};

function formatSentence(date: Date, sentence: string) {
  return Object.entries(dateTokens).reduce((result, [pattern, fun]) => {
    return result.replace(pattern, fun(date).toString());
  }, sentence);
}

const date = new Date();
const string =
  "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";

console.log(formatSentence(date, string));
