"use strict";
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
const flatten = (obj, parentKey = 1, result = []) => {
    for (let key in obj) {
        const propName = parentKey ? parentKey + "_" + key : key;
        if (typeof obj[key] === "object") {
            flatten(obj[key], +propName, result);
        }
        else {
            result[propName] = obj[key];
        }
    }
    return result;
};
console.log(flatten(personInformation));
