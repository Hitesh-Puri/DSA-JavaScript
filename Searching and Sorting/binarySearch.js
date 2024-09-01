/**
 * Binary Search in Javascript
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const arraySearch = [ 4,2,8,3,7,1,4,9,4,3 ]

console.log(binarySearch(arraySearch, 9));