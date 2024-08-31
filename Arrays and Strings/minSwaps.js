/**
 * Minimum Swaps to Sort
  -Approach:

  -> Track the positions of each element in the sorted array.
  -> Count the number of swaps needed by following the cycles formed by these positions.
 */

function minSwaps(arr){
    let n = arr.length;
    const arrPos = arr.map((value, index) => [value, index]);
    console.log('before arrPos :>> ', arrPos);
    arrPos.sort((a, b) => a[0] - b[0]);
    console.log('after arrPos :>> ', arrPos);
    
    
    /** Creates a boolean array of size n, all elements initialized to false. This array is used to keep track of visited elements. The visited array is important because we need to avoid revisiting an element that has already been visited during the process of finding cycles. */
    const visited = Array(n).fill(false);
    let swaps = 0;

    for(let i = 0; i < n; i++){
        if(visited[i] || arrPos[i][1] === i) continue;
        
        let cycleSize = 0;
        let j = i;

        console.log('cycleSize :>> ', cycleSize);

        while(!visited[j]){
            visited[j] = true;
            j = arrPos[j][1];
            cycleSize++;
        }

        if(cycleSize > 0){
            swaps += cycleSize - 1;
        }
    }
    return swaps;
}

console.log(minSwaps([7, 1, 3, 2, 4, 5])); // Output: 4

// Explanation:

// arrPos: [[1, 1], [2, 3], [3, 2], [4, 4], [5, 5], [7, 0]]

// After sorting the array, arrPos becomes: [[1, 1], [2, 3], [3, 2], [4, 4], [5, 5], [7, 0]]

// The first element is 1, which is at position 1. We need to find the correct position for it, which is 1. Since 1 is already at position 1, no swap is needed.

// The second element is 2, which is at position 3. We need to find the correct position for it, which is 2. We swap 2 and 3, and arrPos becomes: [[1, 1], [3, 2], [2, 3], [4, 4], [5, 5], [7, 0]]

// The third element is 3, which is at position 2. We need to find the correct position for it, which is 3. We do not need to swap anything, as 3 is already at position 2.

// The fourth element is 4, which is at position 4. We need to find the correct position for it, which is 4. We do not need to swap anything, as 4 is already at position 4.
