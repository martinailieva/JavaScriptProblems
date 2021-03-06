const timeDifference = (dateOne, dateTwo) => {
  if (dateOne instanceof Date && dateTwo instanceof Date) {
    let difference = new Date(Math.abs(dateTwo - dateOne));

    const time = {
      years: difference.getUTCFullYear() - 1970,
      months: difference.getUTCMonth(),
      days: difference.getUTCDate() - 1,
      hours: difference.getUTCHours(),
      minutes: difference.getUTCMinutes(),
      seconds: difference.getUTCSeconds(),
    };
    const weeks =
      time.days >= 7 ? Math.trunc(time.days / 7) + (time.days % 7 > 3) : 0;

    const { years, months, days, hours, minutes, seconds } = time;
    const finalDifference =
      (years > 0 && years + (months > 6) + " year(s)") ||
      (months > 0 && months + (days > 15) + " month(s)") ||
      (weeks > 0 && weeks + " weeks(s)") ||
      (days > 0 && days + (hours > 12) + " days(s)") ||
      (hours > 0 && hours + (minutes > 30) + " hour(s)") ||
      (minutes > 0 && minutes + (seconds > 30) + " minute(s)") ||
      (seconds > 0 && seconds + " second(s)");

    return finalDifference ? `${finalDifference} ago` : "dates are equal";
  }
  return "Please insert valid dates as arguments";
};

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

function formatSentence(date, sentence) {
  return Object.entries(obj).reduce((result, [pattern, fun]) => {
    return result.replace(pattern, fun(date));
  }, sentence);
}

Date.prototype.timeDifference = timeDifference;
Date.prototype.formatSentence = formatSentence;
