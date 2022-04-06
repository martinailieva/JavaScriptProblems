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

function flattenObj(obj, parentKey = 1, res = []) {
  for (let key in obj) {
    const propName = parentKey ? parentKey + "-" + key : key;
    if (typeof obj[key] === "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

console.log(flattenObj(data));
