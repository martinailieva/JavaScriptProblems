const person = { name: "John Doe" };

const allTypesArray = [
  6,
  "Test",
  "value",
  1,
  { user: { friend: person } },
  undefined,
  null,
  () => console.log("Hello!"),
  { count: 5 },
  { name: "John Doe" },
];

function findObject<T>(arr: Array<T>, obj: T): {} {
  if (!arr || !obj || arr.length === 0) {
    return false;
  }

  return (
    arr.includes(obj) ||
    !!arr.find(
      (item) =>
        item &&
        typeof item === "object" &&
        findObject(Array.isArray(item) ? item : Object.values(item), person)
    )
  );
}

const result = findObject(allTypesArray, person);
console.log(result);
