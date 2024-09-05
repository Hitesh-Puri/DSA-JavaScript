/**
 * Let's learn about objects in Javascript.
 */

// Question 1:

/**
 * Write the code, one line for each action:

1.Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.
 */

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// console.log(user);

/** Ouestion 2:
 * Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:
 */

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// Write code here:
// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

/** Question 3:
 * We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
 */

function sumAll(obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumAll(salaries)); // 390


function multiplyNumeric(obj) {
    let res = {};

    for(let key in obj) {
        if(typeof obj[key] === 'number'){
            res = obj[key] * 2;
        }
    }
    return res;
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(multiplyNumeric(menu));
  
  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };


let calculator = {
    read() {
        this.a = 2
        this.b = 5
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());