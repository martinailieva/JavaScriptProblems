const padZero = (num) => num.toString().padStart(2, "0");

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

function getDayOfMonth(date) {
  const day = date.getDate();
  if (day === 1) {
    return day + "st";
  } else if (day === 2) {
    return day + "nd";
  } else if (day === 3) {
    return day + "rd";
  } else if (day > 3) {
    return day + "th";
  }
}

function getWeekOfYear() {
  let janFirst = new Date(date.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((date - janFirst) / (24 * 60 * 60 * 1000));
  return (result = Math.ceil((date.getDay() + 1 + numberOfDays) / 7));
}

const obj = {
  YYYY: (date) => date.getFullYear(),
  MMMM: getMonthLongName,
  MMM: getMonthShortName,
  MM: (date) => padZero(date.getMonth()),
  M: (date) => date.getMonth(),
  Do: getDayOfMonth,
  DD: (date) => padZero(date.getDate()),
  D: (date) => date.getDate(),
  dddd: getDayLongName,
  ddd: getDayShortName,
  E: (date) => date.getDay(),
  HH: (date) => padZero(date.getHours()),
  H: (date) => date.getHours(),
  mm: (date) => padZero(date.getMinutes()),
  m: (date) => date.getMinutes(),
  ss: (date) => padZero(date.getSeconds()),
  s: (date) => date.getSeconds(),
  Q: getQuarter,
  W: getWeekOfYear,
};

function format(date, sentence) {
  return Object.entries(obj).reduce((result, [pattern, fun]) => {
    return result.replace(pattern, fun(date));
  }, sentence);
}

const date = new Date();
const string =
  "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";

console.log(format(date, string));
