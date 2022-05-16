const personInformation = [
  {
    person: {
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
      { skill: "JavaScript", level: "junior" },
      { skill: "css", level: "junior" },
    ],
  },
  "sunny day",
  5,
];

const input = [{ person: { name: "John", skils: ["JS", "TS"] } }];

const isObjectOrArray = (x: {}) => typeof x === "object" && x !== null;

const recursion = (objOrArr: {} | [], fields: any = []): any =>
  Object.entries(objOrArr)
    .map(([key, val]) =>
      isObjectOrArray(val)
        ? recursion(val, [...fields, key])
        : { [[...fields, key].join("_")]: val }
    )
    .reduce((obj, fieldObj) => ({ ...obj, ...fieldObj }), {});

export const flatten = (arr: any[]) =>
  arr.map((x) => (isObjectOrArray(x) ? recursion(x) : x));

console.log(flatten(input));
