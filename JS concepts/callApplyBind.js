/**
 * call() method: Invokes a function with a given this value and arguments provided individually.
 * 
 * apply() method: Invokes a function with a given this value and arguments provided as an array.
 * 
 * bind() method: Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
 */

function greet(greeting, puncuation){
    console.log(greeting + this.name + puncuation);
}

const person = {
    name: 'John'
};

// call() method
greet.call(person, 'Hello', '!'); // Output: Hello John!

// apply() method
greet.apply(person, ['Hello', '!']); // Output: Hello John!

// bind() method
const boundGreet = greet.bind(person);
boundGreet('Hello', '!'); // Output: Hello John!

// Binds the function to the person object with 'Hello' as the greeting and '!' as the punctuation