/**
 * Question 1:
 * Let arr be an array.
  -> Create a function unique(arr) that should return an array with unique items of arr.
 */

function unique(arr) {
  // return [...new Set(arr)]; // First Method 1
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

/**
 * Question 2:
 * Write a function aclean(arr) that returns an array cleaned from anagrams.
 */

function aclean(arr) {
  // return arr.map(word => word.toLowerCase().split('').sort().join('')).filter((word, index, self) => self.indexOf(word) === index); // First Method 1
  const cleanedArr = [];
  const sortedArr = arr.map((word) =>
    word.toLowerCase().split("").sort().join("")
  );

  for (let i = 0; i < sortedArr.length; i++) {
    if (!cleanedArr.includes(sortedArr[i])) {
      cleanedArr.push(sortedArr[i]);
    }
  }

  return cleanedArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

/**
 * Question 3:
 * get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
 * But that doesn’t work:
 */

let map = new Map();

map.set("name", "John");

// let keys = map.keys(); // This is a wrong statement because map.keys() returns an iterable, but not an array.
let keys = Array.from(map.keys()); // This is a correct statement because Array.from() method converts the keys to an array.

// Error: keys.push is not a function
keys.push("more");

console.log(keys);

/**
 * Question 4:
 * There is a salaries object with arbitrary number of salaries.
 * Write the function sumSalaries(salaries) that re turns the sum of all salaries using Object.values and the for..of loop.
 * If salaries is empty, then the result must be 0.
 */

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));

/**
 * Question 5:
 * Write a function count(obj) that returns the number of properties in the object:
 */

function count(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user));
