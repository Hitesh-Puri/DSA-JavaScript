// What are Higher order functions?

// A higher-order function is a function that either takes another function as an argument or returns a function as its result.

// Higher-order functions are widely used in functional programming, particularly in JavaScript. They provide a powerful abstraction for creating reusable and modular code.

// Example:

// Function to calculate the sum of two numbers

function add(a, b) {
  return a + b;
}

// Higher-order function to calculate the sum of two numbers

function higherOrderAdd(a, b) {
  return function (c) {
    return add(a, b) + c;
  };
}

// More examples:

// Function to filter an array of numbers

function filterNumbers(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Higher-order function to filter an array of numbers

function higherOrderFilter(callback) {
  return function (arr) {
    return filterNumbers(arr, callback);
  };
}

// Function to map an array of numbers

function mapNumbers(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Higher-order function to map an array of numbers

function higherOrderMap(callback) {
  return function (arr) {
    return mapNumbers(arr, callback);
  };
}
