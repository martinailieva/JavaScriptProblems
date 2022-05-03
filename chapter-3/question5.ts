interface Object {
  deepCopy<T>(): {} | T[];
}

const personData = {
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
};

function deepCopyFunction<T>() {
  let outObject: {} | T[], value: T, key: string;
  outObject = Array.isArray(this) ? [] : {};

  for (key in this) {
    if (this.hasOwnProperty(key)) {
      value = this[key];
      if (!value || typeof value !== "object") {
        outObject[key] = value;
      } else {
        outObject[key] = deepCopyFunction.apply(value);
      }
    }
  }

  return outObject;
}

Object.prototype.deepCopy = deepCopyFunction;
console.log(personData.deepCopy());
