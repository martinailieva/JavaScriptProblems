function typeCounter(arr) {
    return arr.reduce(function (acc, curr) {
        if (acc[typeof curr]) {
            acc[typeof curr]++;
        }
        else {
            acc[typeof curr] = 1;
        }
        return acc;
    }, {});
}
var array = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    function () {
        console.log("Hello,  world!");
    },
    { count: 5 },
];
console.log(typeCounter(array));
