interface Date {
  timeDifference(dateOne: Date, dateTwo: Date): string;
  formatSentence(date: Date, sentence: string): string;
}

Date.prototype.timeDifference = (dateOne: Date, dateTwo: Date): string => {
  if (dateOne instanceof Date && dateTwo instanceof Date) {
    let difference = new Date(Math.abs(+dateTwo - +dateOne));

    const time = {
      years: difference.getUTCFullYear() - 1970,
      months: difference.getUTCMonth(),
      days: difference.getUTCDate() - 1,
      hours: difference.getUTCHours(),
      minutes: difference.getUTCMinutes(),
      seconds: difference.getUTCSeconds(),
    };
    const weeks =
      time.days >= 7 ? Math.trunc(time.days / 7) + +(time.days % 7 > 3) : 0;

    const { years, months, days, hours, minutes, seconds } = time;
    const finalDifference =
      (years > 0 && years + +(months > 6) + " year(s)") ||
      (months > 0 && months + +(days > 15) + " month(s)") ||
      (weeks > 0 && weeks + " weeks(s)") ||
      (days > 0 && days + +(hours > 12) + " days(s)") ||
      (hours > 0 && hours + +(minutes > 30) + " hour(s)") ||
      (minutes > 0 && minutes + +(seconds > 30) + " minute(s)") ||
      (seconds > 0 && seconds + " second(s)");

    return finalDifference ? `${finalDifference} ago` : "dates are equal";
  }
  return "Please insert valid dates as arguments";
};

const padZero = (num: number): string => num.toString().padStart(2, "0");

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

function getDayShortName(date: Date): string {
  const index = date.getDay();
  return dayOfWeekName[index - 1].substring(0, 3);
}

function getDayLongName(date: Date): string {
  const index = date.getDay();
  return dayOfWeekName[index - 1];
}

function getMonthShortName(date: Date): string {
  const index = date.getMonth();
  return monthName[index].substring(0, 3);
}

function getMonthLongName(date: Date): string {
  const index = date.getMonth();
  return monthName[index];
}

function getQuarter(): 1 | 2 | 3 | 4 {
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

function getDayOfMonth(date: Date): string {
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

function getWeekOfYear(): number {
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

Date.prototype.formatSentence = function formatSentence(
  date: Date,
  sentence: string
): string {
  return Object.entries(dateTokens).reduce((result, [pattern, fun]) => {
    return result.replace(pattern, fun(date).toString());
  }, sentence);
};

const date = new Date();
const string =
  "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";
