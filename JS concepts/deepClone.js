/**
 * Deep Clone in Javascript
 */

function deepClone(obj) {
    if (obj === null || typeof obj!== 'object') {
        return obj;
    }
    let clone = Array.isArray(obj)? [] : {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

let originalArray = [1, 2, [3, 4], {a: 5, b: [6, 7]}];

let clonedArray = deepClone(originalArray);

clonedArray[2][0] = 10;
clonedArray[3].a = 8;
clonedArray[3].b[1] = 9;

console.log(originalArray); // Output: [1, 2, [3, 4], {a: 5, b: [6, 7]}]

console.log(clonedArray); // Output: [1, 2, [10, 4], {a: 8, b: [6, 9]}]

// Below is another approach to deep clone an object

const obj2 = {a:1, b: { c: 10 }}
const deepClone2 = JSON.parse(JSON.stringify(obj2));

console.log(deepClone2);