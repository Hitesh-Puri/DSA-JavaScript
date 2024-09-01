/**
 * Flatten Array
 * 
 -> Concept: Recursion, Array manipulation, Iteration, and Concatenation.
 */

function flattenArr(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        // console.log('i :>> ', i);
        if(Array.isArray(arr[i])){
            // console.log('arr :>> ', arr);
            result = result.concat(flattenArr(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let inputArray = [[1,2,[3,4]],5,[6,[7,[8,9]]]];
console.log(flattenArr(inputArray)); // Output: [1,2,3,4,5,6,7,8,9]

// Different ways in which we can flatten an array?

// 1. Using recursion: This solution involves calling itself recursively to flatten the nested arrays. However, it may lead to a stack overflow error for deeply nested arrays.
// 2. Using a loop: This solution iterates over the array using a loop and pushes the elements into a new array. It checks if each element is an array using the Array.isArray() method. If it is, it recursively calls the flattenArr() function to flatten the nested array. If it is not an array, it pushes the element directly into the result array.
// 3. Using the spread operator (...): This solution uses the spread operator (...) to flatten the nested arrays. It recursively calls the flattenArr() function to flatten the nested array and then concatenates the result with the result array.
// 4. Using the reduce() method: This solution uses the reduce() method to flatten the nested arrays. It recursively calls the flattenArr() function to flatten the nested array and then concatenates the result with the result array.

// Note: The input array can contain any level of nesting. You should flatten the array to a single level.

// Bonus: Optimize your solution to have a time complexity of O(n), where n is the total number of elements in the input array.

