export class Watch {
  date: Date;
  format: string;
  timezone: string;

  constructor(date = new Date(), format = "", timezone = "") {
    this.date = date;
    this.format = format;
    this.timezone = timezone;
  }

  showTime = (format = null, timezone = null) => {
    const padZero = (num: number): string => num.toString().padStart(2, "0");

    const dateTokens = {
      YYYY: (date: Date) => date.getFullYear(),
      MM: (date: Date) => padZero(date.getMonth()),
      M: (date: Date) => date.getMonth(),
      DD: (date: Date) => padZero(date.getDate()),
      D: (date: Date) => date.getDate(),
      HH: (date: Date) => padZero(date.getHours()),
      H: (date: Date) => date.getHours(),
      mm: (date: Date) => padZero(date.getMinutes()),
      m: (date: Date) => date.getMinutes(),
      ss: (date: Date) => padZero(date.getSeconds()),
      s: (date: Date) => date.getSeconds(),
    };

    const regularTime = (): string => {
      const hours = this.date.getHours();
      const minutes = this.date.getMinutes();
      const seconds = this.date.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    };

    const tokenFill = (date: Date, format: any): any => {
      return Object.entries(dateTokens).reduce((result, [token, func]) => {
        return result.replace(token, func(date));
      }, format);
    };

    const timeInDifferentTimezones = (format: string, timezoneDate: string) => {
      let invdate = new Date(
        this.date.toLocaleString("en-US", {
          timeZone: timezoneDate,
        })
      );
      return tokenFill(invdate, format);
    };

    if (!format && !timezone) {
      setInterval(() => {
        this.date = new Date();
        console.log(regularTime());
      }, 1000);
    } else if (format && !timezone) {
      setInterval(() => {
        this.date = new Date();
        console.log(tokenFill(this.date, format));
      }, 1000);
    } else if (format && timezone) {
      setInterval(() => {
        this.date = new Date();
        console.log(timeInDifferentTimezones(format, timezone));
      }, 1000);
    }
  };
}

const watch = new Watch();
// console.log(watch.showTime());
// console.log(watch.showTime("YYYY-MM-DD HH:mm:ss"));
// console.log(watch.showTime("YYYY-MM-DD HH:mm:ss", "Asia/Shanghai"));
// console.log(watch.showTime("YYYY-MM-DD HH:mm:ss", "Europe/Sofia"));
