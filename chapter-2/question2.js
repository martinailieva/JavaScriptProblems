const person = { name: "John Doe" };

const arr = [
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

function findObject(arr, obj) {
  if (!arr || !obj || arr.length === 0) {
    return false;
  }

  return (
    arr.includes(obj) ||
    !!arr.find(
      (item) =>
        item &&
        typeof item === "object" &&
        findObj(Array.isArray(item) ? item : Object.values(item), person)
    )
  );
}

const result = findObject(arr, person);

console.log(result);

export default findObject;
