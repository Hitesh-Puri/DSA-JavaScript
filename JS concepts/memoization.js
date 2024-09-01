/**
 * Memoization in Javascript
 * 
 -> Memoization is an optimization technique where the results of expensive function calls are cached and returned when the same inputs occur again, avoiding redundant computations.
 */

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache[key]){
            console.log('This is from cached result :>> ');
            return cache[key];
        } else {
            console.log('This is from new calculation :>> ');
            cache[key] = fn.apply(this, args);
            return cache[key];
        }
    }
}

const factorial= (n) => {
    if(n===0) return 1;
    return n * factorial(n-1);
}

const memoziedFactorial = memoize(factorial)

console.log(memoziedFactorial(5));
console.log(memoziedFactorial(5));
console.log(memoziedFactorial(4));
console.log(memoziedFactorial(4));