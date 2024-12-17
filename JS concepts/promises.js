// Explain promises in Javascript.

// A promise is an object representing the eventual completion or failure of an asynchronous operation.

// Promises are used to handle asynchronous operations and avoid callback hell.

// Promises have three states: pending, fulfilled, and rejected.

// The Promise constructor takes a function as an argument, which is called when the promise is created. This function is called with two arguments: resolve and reject.

// resolve is a function that takes a value as an argument and resolves the promise. If the value is a promise, the promise returned by resolve will be the same as the input promise.

// reject is a function that takes an error as an argument and rejects the promise.

// Examples of Promises:

// 1. Fetch API: The fetch() function returns a promise that resolves to a Response object when the request succeeds.

// 2. setTimeout and clearTimeout: The setTimeout() and clearTimeout() functions return a numeric ID, which can be used to cancel the timeout. The returned ID is a promise that resolves to undefined when the timeout is reached.

// Promise chaining: Promises can be chained together using the then() and catch() methods.

// then() is called on a promise that resolves, and it takes two arguments: a fulfilledCallback and a rejected callback. The fulfilled callback is called with the resolved value, and the rejected callback is called with the rejected error.

// catch() is called on a promise that rejects, and it takes a single argument: a rejected callback. The rejected callback is called with the rejected error.

// Promises can also be resolved using the Promise.resolve() and Promise.reject() functions.

// Promises can also be created using the Promise.all() and Promise.race() methods.

// Promise.all() is used to resolve a promise when all of the promises in an array have resolved. It takes an array of promises as an argument and returns a new promise that resolves to an array of the resolved values. If any promise in the array rejects, the new promise will reject.

// Promise.race() is used to resolve a promise as soon as one of the promises in an array resolves. It takes an array of promises as an argument and returns a new promise that resolves to the resolved value of the first promise to resolve. If all promises in the array reject, the new promise will reject.

// Promises can also be created using async/await syntax.

// Async/await syntax allows you to write asynchronous code in a synchronous manner using the await keyword.

// Async functions return a promise. You can use the await keyword to wait for a promise to resolve before executing the following code.

// Implemente a promise:

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 2000);
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Implemente a promise chain:

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 2000);
});

myPromise2
  .then((value) => {
    console.log(value);
    return "World!";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Implemente a promise that resolves using Promise.resolve():

const resolvedPromise = Promise.resolve("Hello, Promise!");

resolvedPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Implemente a promise that rejects using Promise.reject():

const rejectedPromise = Promise.reject(new Error("Promise rejected!"));

rejectedPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Implemente Promise.all():

const promise1 = Promise.resolve("Hello");
const promise2 = Promise.resolve("World");

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

// Implemente Promise.race():

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected!"));
  }, 2000);
});

Promise.race([promise3, promise4])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Implemente async/await syntax:

async function myAsyncFunction() {
  try {
    const value = await Promise.resolve("Hello");
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}

myAsyncFunction();
