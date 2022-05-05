interface Object {
  deepCopy(): any;
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

function deepCopyFunction() {
  let outObject: any, value: any, key: string;
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
