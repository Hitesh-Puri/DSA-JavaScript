/**
 * Function to reverse a Singly Linked List
 */

function reverseList (head) {
    let prev = null;
    let current = head;
    let next;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev; // return the new head of the reversed list
}

// Example usage:

// Create a sample Singly Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);

let second = new Node(2);

let third = new Node(3);

head.next = second;

second.next = third;

console.log("Original Linked List:");

let currentNode = head; 

    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
    
// Reverse the linked list

let reversedHead = reverseList(head);

console.log("\nReversed Linked List:");

currentNode = reversedHead;

    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
    
 // Output: Original Linked List: 1 2 3
 