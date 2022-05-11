const padWithZero = (num: number): string => num.toString().padStart(2, "0");

export const dateToString = (date: Date): string => {
  const day = padWithZero(date.getDate());
  const month = padWithZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hour = padWithZero(date.getUTCHours());
  const minutes = padWithZero(date.getUTCMinutes());
  const seconds = padWithZero(date.getUTCSeconds());
  const zone = padWithZero(date.getMilliseconds());

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}.${zone}Z`;
};

const myDate = new Date();
console.log(myDate);
console.log(dateToString(myDate));
