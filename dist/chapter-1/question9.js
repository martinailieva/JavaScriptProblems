"use strict";
const padZeroDate = (num) => num.toString().padStart(2, "0");
const getAmPm = (date) => {
    if (date.getHours() < 12) {
        return "AM";
    }
    else {
        return "PM";
    }
};
const dateTokensShort = {
    YYYY: (date) => date.getFullYear(),
    MM: (date) => padZeroDate(date.getMonth()),
    M: (date) => date.getMonth(),
    DD: (date) => padZeroDate(date.getDate()),
    D: (date) => date.getDate(),
    A: getAmPm,
    HH: (date) => padZeroDate(date.getHours()),
    H: (date) => date.getHours(),
    mm: (date) => padZeroDate(date.getMinutes()),
    m: (date) => date.getMinutes(),
    ss: (date) => padZeroDate(date.getSeconds()),
    s: (date) => date.getSeconds(),
};
const tokenFill = (date, string) => {
    return Object.entries(dateTokensShort).reduce((result, [token, func]) => {
        return result.replace(token, func(date).toString());
    }, string);
};
const myNewDate = new Date();
const customString = "YYYY-MM-DD HH:mm:ss Is my proof of concept!";
console.log(tokenFill(myNewDate, customString));
