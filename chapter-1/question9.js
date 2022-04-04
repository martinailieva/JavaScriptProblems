const tokenSystem = (date, string) => {
  const usersToken = string.split("-");
  let result = "";

  const tokens = {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };

  const { year, month, day, hours, minutes, seconds } = tokens;

  result += usersToken[0].replace(/YYYY/i, year) + "-";
  result += usersToken.includes("M")
    ? usersToken[1].replace(/M/i, month) + "-"
    : usersToken[1].replace(/MM/i, padWithZero(month)) + "-";
  result += usersToken.includes("D")
    ? usersToken[2].replace(/D/i, day) + "-"
    : usersToken[2].replace(/DD/i, padWithZero(day)) + "-";

  result += usersToken.includes("H")
    ? usersToken[3].replace(/H/i, hours) + ":"
    : usersToken[3].replace(/HH/i, padWithZero(hours)) + ":";

  result += usersToken.includes("m")
    ? usersToken[4].replace(/m/i, minutes) + ":"
    : usersToken[4].replace(/mm/i, padWithZero(minutes)) + ":";

  result += usersToken.includes("s")
    ? usersToken[5].replace(/s/i, seconds)
    : usersToken[5].replace(/ss/i, padWithZero(seconds));

  result += usersToken.includes("A")
    ? usersToken[6].replace(/a/i, "am")
    : usersToken[6].replace(/A/i, "AM");

  return result;
};

const padWithZero = (number) => {
  if (number <= 9) {
    number = ("0" + number).slice(-4);
  }
  return number;
};

console.log(
  tokenSystem(
    new Date("2022-03-21 12:00:00"),
    "YYYY-MM-DD-HH-mm-ss-A Is my proof of concept"
  )
);
