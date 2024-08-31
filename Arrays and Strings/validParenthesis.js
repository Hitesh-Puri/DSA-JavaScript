/**
 * Valid Parentheses
  - Approach:

  -> Use a stack to track opening brackets and ensure they match the closing brackets.
 */

function isValid(str){
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];

    for(let i = 0; i < str.length; i++){
        const char = str[i];
        
        if(openBrackets.includes(char)){
            stack.push(char);
        }
        else if(closeBrackets.includes(char)){
            if(stack.length === 0 || openBrackets.indexOf(stack.pop())!== closeBrackets.indexOf(char)){
                return false;
            }
        }

        return stack.length === 0;
    }
}

console.log(isValid("()[]{}"))


function validParen(str){
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        } else {
            if(stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;
}

console.log(validParen("({[]}"))

/************************************************ */

// Write a program to find length of longest balanced parenthesis prefix

function longestBalancedPrefix(str) {
    let maxLen = 0;
    let stack = [];

    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0 || openBrackets.indexOf(stack.pop())!== closeBrackets.indexOf(char)) {
                return str.slice(0, i);
            }
        }

        maxLen = Math.max(maxLen, i + 1);
    }

    // return str.slice(0, maxLen);
    return maxLen;
}

console.log(longestBalancedPrefix("((()())())(("));
