const padZero = (num) => num.toString().padStart(2, "0");

const getAmPm = (date) => {
  if (date.getHours() < 12) {
    return "AM";
  } else {
    return "PM";
  }
};

const tokens = {
  YYYY: (date) => date.getFullYear(),
  MM: (date) => padZero(date.getMonth()),
  M: (date) => date.getMonth(),
  DD: (date) => padZero(date.getDate()),
  D: (date) => date.getDate(),
  A: getAmPm,
  HH: (date) => padZero(date.getHours()),
  H: (date) => date.getHours(),
  mm: (date) => padZero(date.getMinutes()),
  m: (date) => date.getMinutes(),
  ss: (date) => padZero(date.getSeconds()),
  s: (date) => date.getSeconds(),
};

const tokenFill = (date, string) => {
  return Object.entries(tokens).reduce((result, [token, func]) => {
    return result.replace(token, func(date));
  }, string);
};

const myDate = new Date();
const customString = "YYYY-MM-DD HH:mm:ss Is my proof of concept!";

console.log(tokenFill(myDate, customString));
