/**
 * Currying Function in Javascript
 * 
 * Currying is the process of transforming a function that takes multiple arguments into a series of functions that each take a single argument. 
 * This technique is useful in functional programming.
 */

function curry(arg1){
    return function(arg2){
        return function(...args){
            return arg1 + arg2 + args.reduce((acc, curr) => acc + curr, 0);
        }
    }
}

const add = curry(6)(6)(10, (8), (9), (10))

console.log(add);
