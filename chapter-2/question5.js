const data = [
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

const flatten = (arr, parentKey = 1, result = []) => {
  for (let key of arr) {
    const propName = parentKey ? parentKey + "_" + key : key;
    if (typeof arr[key] === "object") {
      flatten(obj[key], propName, result);
    } else {
      result[propName] = obj[key];
    }
  }
  return result;
};

console.log(flatten(data));
