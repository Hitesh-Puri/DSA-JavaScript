/**
 * Find the maximum consecutive repeating characters in a string.
 * 
 -> Time Complexity: O(n)
 */

function maxRepeatChars(str) {
    let maxChar = '';
    let maxCount = 0;
    let currChar = '';
    let currCount = 0;

    for(let i=0;i<str.length;i++){
        console.log('str[i] :>> ', str[i]);
        console.log('currChar :>> ', currChar);
        console.log('currCount :>> ', currCount);
        if(str[i] === currChar){
            currCount++;
        } else {
            if(currCount > maxCount){
                maxCount = currCount;
                maxChar = currChar;
            }
            currChar = str[i];
            currCount = 1;
        }
    }

    if(currCount > maxCount){
        maxCount = currCount;
        maxChar = currChar;
    }

    return {maxChar, maxCount};
}

console.log(maxRepeatChars('aabbbccdeeeffggh')); // Output: { maxChar: 'b', maxCount: 3 }

// What is the approach of this question?

// The approach to solve this problem is to iterate through the string, keeping track of the current character and its count. Whenever we encounter a different character, we compare the current count with the maximum count found so far. If the current count is greater, we update the maximum count and the character. After iterating through the entire string, we check if the last character's count is greater than the maximum count. If it is, we update the maximum count and character. 


// Find the maximum characters in a string

function maxRepeatChars2(str) {
    let maxChar = '';
    let maxCount = 0;

    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=i;j<str.length;j++){
            if(str[i] === str[j]){
                count++;
            } else {
                break;
            }
        }

        if(count > maxCount){
            maxCount = count;
            maxChar = str[i];
        }
    }

    return {maxChar, maxCount};
}

console.log(maxRepeatChars2('aabbcdebafa')); // Output: { maxChar: 'b', maxCount: 3 }