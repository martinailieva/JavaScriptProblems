const weightCounter = (obj) => {
  let counter = 0;
  Object.values(obj).forEach((item) => {
    if (typeof item === "string") {
      counter += 8;
    } else if (typeof item === "number") {
      counter += 4;
    } else if (!item && typeof item === "object") {
      counter += 2;
    } else if (typeof item === "object" || typeof item === "function") {
      counter += 10;
    } else if (typeof item === undefined) {
      counter += 2;
    } else if (typeof item === "boolean") {
      counter += 4;
    } else if (item instanceof Date && !isNaN(val.valueOf())) {
      counter += 2;
    }
  });
  return counter;
};

const object = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello, world!");
  },
  experience: { count: 5 },
};

console.log(weightCounter(object));
