/**
 * Function Binding in JS.
 * 
 * Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first arguments if given.

 * Usually we apply bind to fix this for an object method, so that we can pass it somewhere. For example, to setTimeout.
 */

/**
 * Question 1:
 * What will be the output?
 */

function f() {
  console.log(this); // null, because the context of a bound function is hard-fixed. There’s just no way to further change it.
}

let user = {
  g: f.bind(null),
};

user.g();

/**
 * Question 2:
 * 
 * Can we change this by additional binding?
    What will be the output?
 */

function f() {
  console.log(this.name); // John, reason: A function cannot be re-bound.
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();