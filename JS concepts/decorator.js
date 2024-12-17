/**
 * Decorators and forwardng, call/apply methods
 * 
 * Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.

Decorators can be seen as “features” or “aspects” that can be added to a function. We can add one or add many. And all this without changing its code!

To implement cachingDecorator, we studied methods:

- func.call(context, arg1, arg2…) – calls func with given context and arguments.
- func.apply(context, args) – calls func passing context as this and array-like args into a list of arguments.

Note: The generic call forwarding is usually done with apply
 */

/**
 * Question 1:
 * 
 * Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

Every call is saved as an array of arguments.
 */

function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

/**
 * Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
 *
 * In other words, delay(f, ms) returns a "delayed by ms" variant of f.
 */

function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test 1"); // shows "test" after 1000ms
f1500("test 2 after delay"); // shows "test" after 1500ms

function delay(func, ms){
    return function(...args){
        setTimeout(() => func.apply(this, args), ms);
    }
}

/*************************************** */

/**
 * Note: Debonce and throttle are decorator functions.
 * 
 */