const dataObject = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello,  world!");
  },
  experience: { count: 5 },
};

const weightCounter = (object) => {
  let counter = 0;
  Object.values(object).forEach((item) => {
    if (typeof item === "string") {
      counter += 8;
    } else if (typeof item === "number") {
      counter += 4;
    } else if (item === null) {
      counter += 2;
    } else if (
      typeof item === "object" ||
      typeof item === "function" ||
      Array.isArray(item)
    ) {
      counter += 10;
    } else if (typeof item === undefined) {
      counter += 2;
    } else if (typeof item === "boolean") {
      counter += 4;
    }
  });
  return counter;
};
console.log(weightCounter(dataObject));
