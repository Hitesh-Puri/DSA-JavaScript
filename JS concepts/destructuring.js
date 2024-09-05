/**
 * What is Destructuring in Javascript?
 * 
 * The two most used data structures in JavaScript are Object and Array.

- Objects allow us to create a single entity that stores data items by key.
- Arrays allow us to gather data items into an ordered list.

However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
 */

/**
 * Question 1:
 * 
 * We have an object (user):

Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
 */

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name, age, isAdmin);

/**
 * Question 2: Maximal Salary
 * 
 * Create the function topSalary(salaries) that returns the name of the top-paid person.

- If salaries is empty, it should return null.
- If there are multiple top-paid persons, return any of them.

P.S. Use Object.entries and destructuring to iterate over key/value pairs.
 */

function topSalary(salaries) {
    // if (Object.keys(salaries).length === 0) return null;
    
    // let [topName, topSalary] = Object.entries(salaries).reduce((max, [name, salary]) => salary > max[1]? [name, salary] : max, ["", 0]);
    
    // return topName;

    let maxSalary = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(salaries)){
        if(maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return {maxName, maxSalary};
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(topSalary(salaries));