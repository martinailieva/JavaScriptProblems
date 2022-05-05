const padZeroDate = (num: number): string => num.toString().padStart(2, "0");

const getAmPm = (date: Date): "AM" | "PM" => {
  if (date.getHours() < 12) {
    return "AM";
  } else {
    return "PM";
  }
};

const dateTokensShort = {
  YYYY: (date: Date) => date.getFullYear(),
  MM: (date: Date) => padZeroDate(date.getMonth()),
  M: (date: Date) => date.getMonth(),
  DD: (date: Date) => padZeroDate(date.getDate()),
  D: (date: Date) => date.getDate(),
  A: getAmPm,
  HH: (date: Date) => padZeroDate(date.getHours()),
  H: (date: Date) => date.getHours(),
  mm: (date: Date) => padZeroDate(date.getMinutes()),
  m: (date: Date) => date.getMinutes(),
  ss: (date: Date) => padZeroDate(date.getSeconds()),
  s: (date: Date) => date.getSeconds(),
};

const tokenFill = (date: Date, string: string): string => {
  return Object.entries(dateTokensShort).reduce((result, [token, func]) => {
    return result.replace(token, func(date).toString());
  }, string);
};

const myNewDate = new Date();
const customString = "YYYY-MM-DD HH:mm:ss Is my proof of concept!";

console.log(tokenFill(myNewDate, customString));
