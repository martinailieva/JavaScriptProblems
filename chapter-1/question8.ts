const timeDifference = (dateOne: Date, dateTwo: Date) => {
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

console.log(
  timeDifference(
    new Date("2022-01-01 11:11:11"),
    new Date("2022-01-09 12:12:12")
  )
);
