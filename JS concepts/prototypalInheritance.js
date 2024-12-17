/**
 * Prototypal inheritance is a way to create objects by creating a new object and setting its prototype to another object.
 * This allows objects to inherit properties and methods from their prototype object.
 */

// Here's an example of prototypal inheritance:

// Create a prototype object

let animalPrototype = {
  eat: function () {
    console.log("Eating...");
  },
};

// Create a new object using the prototype object

let cat = Object.create(animalPrototype);
cat.name = "Tom";

// Access properties and methods from the prototype object

console.log(cat.name); // Output: Tom
cat.eat(); // Output: Eating...

// Modify the prototype object

animalPrototype.sound = "Meow";

// Access the modified property and method

console.log(cat.sound); // Output: Meow
cat.eat(); // Output: Eating...

console.log(Object.getPrototypeOf(cat) == animalPrototype);
