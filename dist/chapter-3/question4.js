"use strict";
class Watch {
    constructor(date = new Date(), format = null, timezone = null) {
        this.showTime = (format = null, timezone = null) => {
            const padZero = (num) => num.toString().padStart(2, "0");
            const dateTokens = {
                YYYY: (date) => date.getFullYear(),
                MM: (date) => padZero(date.getMonth()),
                M: (date) => date.getMonth(),
                DD: (date) => padZero(date.getDate()),
                D: (date) => date.getDate(),
                HH: (date) => padZero(date.getHours()),
                H: (date) => date.getHours(),
                mm: (date) => padZero(date.getMinutes()),
                m: (date) => date.getMinutes(),
                ss: (date) => padZero(date.getSeconds()),
                s: (date) => date.getSeconds(),
            };
            const regularTime = () => {
                const hours = this.date.getHours();
                const minutes = this.date.getMinutes();
                const seconds = this.date.getSeconds();
                return `${hours}:${minutes}:${seconds}`;
            };
            const tokenFill = (date, format) => {
                return Object.entries(dateTokens).reduce((result, [token, func]) => {
                    return result.replace(token, func(date));
                }, format);
            };
            const timeInDifferentTimezones = (format, timezoneDate) => {
                let invdate = new Date(this.date.toLocaleString("en-US", {
                    timeZone: timezoneDate,
                }));
                return tokenFill(invdate, format);
            };
            if (!format && !timezone) {
                setInterval(() => {
                    this.date = new Date();
                    console.log(regularTime());
                }, 1000);
            }
            else if (format && !timezone) {
                setInterval(() => {
                    this.date = new Date();
                    console.log(tokenFill(this.date, format));
                }, 1000);
            }
            else if (format && timezone) {
                setInterval(() => {
                    this.date = new Date();
                    console.log(timeInDifferentTimezones(format, timezone));
                }, 1000);
            }
        };
        this.date = date;
        this.format = format;
        this.timezone = timezone;
    }
}
const watch = new Watch();
// console.log(watch.showTime());
console.log(watch.showTime("YYYY-MM-DD HH:mm:ss"));
// console.log(watch.showTime("YYYY-MM-DD HH:mm:ss", "Asia/Shanghai"));
// console.log(watch.showTime("YYYY-MM-DD HH:mm:ss", "Europe/Sofia"));
