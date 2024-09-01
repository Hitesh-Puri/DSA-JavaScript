/**
 * Detect loop in Linked list
 * 
 * Problem: Given a linked list, determine if it has a cycle in it.
 * 
 * Concept: Floyd's Cycle-finding algorithm
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function detectLoop(head) {
    if(!head || !head.length === 0) return false;
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true; // true when loop detected.
    }
    return false; // No loop detected.
}

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);

head.next = second;

second.next = third;

third.next = fourth;

fourth.next = fifth;

fifth.next = second; // Loop created

console.log(detectLoop(head)); // Output: true