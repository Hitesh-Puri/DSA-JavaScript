/**
 * Closures in JavaScript
 *
 * A closure is a function that remembers and has access to its lexical scope, even when the function is executed outside that scope.
 */

function outerFunction() {
  let outerVar = "I am a variable in outerFunction";

  return function innerFunction() {
    console.log(outerVar);
  };
}

const closure = outerFunction();

closure(); // Output: I am a variable in outerFunction

// More examples on Closure functions as asked in interviews

// 1. Immediately Invoked Function Expression (IIFE)

(function () {
  let i = 0;
  console.log(i); // Output: 0
})();

// 2. Closures with private variables

function Counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = Counter();

counter.increment(); // Output: 1

counter.decrement(); // Output: 0

// 3. Closures to access variables from outer scope

function createCounter(initialValue) {
  let count = initialValue;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    },
  };
}

const counter2 = createCounter(5);

counter2.increment(); // Output: 6

counter2.decrement(); // Output: 5

console.log(counter2.getCount()); // Output: 5

// 4. Closures to modify variables from outer scope

function modifyArray(array) {
  array.push("new element");

  return function () {
    console.log(array);
  };
}

const myArray = ["old element"];

const modifyClosure = modifyArray(myArray);

modifyClosure(); // Output: ["old element", "new element"]

console.log(myArray); // Output: ["old element", "new element"]

// 5. Closures to access variables from multiple outer scopes

function outerFunction2() {
  let outerVar = "I am a variable in outerFunction2";

  return function innerFunction() {
    console.log(outerVar);
  };
}

function outerFunction3() {
  let outerVar = "I am a variable in outerFunction3";

  return outerFunction2();
}

const closure2 = outerFunction3();

closure2(); // Output: I am a variable in outerFunction2

// 6. Closures to access variables from multiple inner scopes

function outerFunction4() {
  let outerVar = "I am a variable in outerFunction4";

  return function innerFunction() {
    return function innerInnerFunction() {
      console.log(outerVar);
    };
  };
}

const closure3 = outerFunction4();

closure3()(); // Output: I am a variable in outerFunction4
