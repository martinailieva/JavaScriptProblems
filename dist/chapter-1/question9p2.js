"use strict";
const padZeroDates = (num) => num.toString().padStart(2, "0");
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
function getDayShort(date) {
    const index = date.getDay();
    return dayOfWeek[index - 1].substring(0, 3);
}
function getDayLong(date) {
    const index = date.getDay();
    return dayOfWeek[index - 1];
}
function getMonthShort(date) {
    const index = date.getMonth();
    return months[index].substring(0, 3);
}
function getMonthLong(date) {
    const index = date.getMonth();
    return months[index];
}
function getFullQuarter() {
    if (date.getMonth() < 2) {
        return 1;
    }
    else if (date.getMonth() < 5) {
        return 2;
    }
    else if (date.getMonth() < 8) {
        return 3;
    }
    else if (date.getMonth() < 11) {
        return 4;
    }
    else {
        return 1;
    }
}
function getFullDayOfMonth(date) {
    const day = date.getDate().toString();
    const splitted = day.split("");
    const secondDateChar = splitted[1];
    if ((secondDateChar === "1" && day !== "11") || day === "1") {
        return day + "st";
    }
    else if ((secondDateChar === "2" && day !== "12") || day === "2") {
        return day + "nd";
    }
    else if ((secondDateChar === "3" && day !== "13") || day === "3") {
        return day + "rd";
    }
    else if (secondDateChar > "3" ||
        day === "11" ||
        day === "12" ||
        day === "13") {
        return day + "th";
    }
    return "default";
}
function getWeek() {
    const janFirst = new Date(date.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((+date - +janFirst) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}
const fullDateTokens = {
    YYYY: (date) => date.getFullYear(),
    MMMM: getMonthLong,
    MMM: getMonthShort,
    MM: (date) => padZeroDates(date.getMonth()),
    M: (date) => date.getMonth(),
    Do: getFullDayOfMonth,
    DD: (date) => padZeroDates(date.getDate()),
    D: (date) => date.getDate(),
    dddd: getDayLong,
    ddd: getDayShort,
    E: (date) => date.getDay(),
    HH: (date) => padZeroDates(date.getHours()),
    H: (date) => date.getHours(),
    mm: (date) => padZeroDates(date.getMinutes()),
    m: (date) => date.getMinutes(),
    ss: (date) => padZeroDates(date.getSeconds()),
    s: (date) => date.getSeconds(),
    Q: getFullQuarter,
    W: getWeek,
};
function formatSentence(date, sentence) {
    return Object.entries(fullDateTokens).reduce((result, [pattern, fun]) => {
        return result.replace(pattern, fun(date).toString());
    }, sentence);
}
const dateForFormat = new Date();
const formatingString = "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";
console.log(formatSentence(dateForFormat, formatingString));
