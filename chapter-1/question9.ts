const padZero = (num: number): string => num.toString().padStart(2, "0");

const getAmPm = (date: Date): "AM" | "PM" => {
  if (date.getHours() < 12) {
    return "AM";
  } else {
    return "PM";
  }
};

const dateTokens = {
  YYYY: (date: Date) => date.getFullYear(),
  MM: (date: Date) => padZero(date.getMonth()),
  M: (date: Date) => date.getMonth(),
  DD: (date: Date) => padZero(date.getDate()),
  D: (date: Date) => date.getDate(),
  A: getAmPm,
  HH: (date: Date) => padZero(date.getHours()),
  H: (date: Date) => date.getHours(),
  mm: (date: Date) => padZero(date.getMinutes()),
  m: (date: Date) => date.getMinutes(),
  ss: (date: Date) => padZero(date.getSeconds()),
  s: (date: Date) => date.getSeconds(),
};

const tokenFill = (date: Date, string: string): string => {
  return Object.entries(dateTokens).reduce((result, [token, func]) => {
    return result.replace(token, func(date).toString());
  }, string);
};

const myNewDate = new Date();
const customString = "YYYY-MM-DD HH:mm:ss Is my proof of concept!";

console.log(tokenFill(myNewDate, customString));
