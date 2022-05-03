var data = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    { name: "john.doe", role: "admin" },
];
var weight = 2;
var findByWeight = function (obj) {
    var counter = 0;
    Object.values(obj).forEach(function (item) {
        if (typeof item === "string") {
            counter += 8;
        }
        else if (typeof item === "number") {
            counter += 4;
        }
        else if (!item && typeof item === "object") {
            counter += 2;
        }
        else if (typeof item === "object" && typeof item !== null) {
            counter += 10 + +findByWeight(item);
        }
        else if (typeof item === "function" || Array.isArray(item)) {
            counter += 10 + +findByWeight(item);
        }
        else if (typeof item === undefined) {
            counter += 2;
        }
        else if (typeof item === "boolean") {
            counter += 4;
        }
    });
    return counter > weight ? true : false;
};
console.log(findByWeight(data));
