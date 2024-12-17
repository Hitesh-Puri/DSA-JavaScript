/**
 * There are two methods for it:

 -> setTimeout allows us to run a function once after the interval of time.
 -> setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
 */

/**
 * Question 1:
 * 
 * Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
 */

function printNumbers(from, to) {
    function printNumber(num) {
        console.log(num);
        if (num < to) {
            setTimeout(printNumber, 1000, num + 1);
        }
    }
    return printNumber(from);
}

// Using setInterval

console.log(printNumbers(1, 10)); 

