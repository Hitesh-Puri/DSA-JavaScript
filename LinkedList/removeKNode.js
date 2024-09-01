/**
 * Remove k-th Node from end of the Linked List
 * 
 * Problem: Given a linked list, remove the n-th node from the end of the list and return its head.
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    // Create two pointers: slow and fast
    let slow = head;
    let fast = head;
    
    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // If fast pointer reaches end of list, n is greater than the length of list
    if (fast === null) {
        return head.next;
    }
    
    // Move both pointers until fast pointer reaches end of list
    while (fast.next!== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove the nth node from end
    slow.next = slow.next.next;
    
    return head;
}

// Test the function

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");

let currentNode = head;

while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}

console.log("\nAfter removing 2nd node from end:");

const newHead = removeNthFromEnd(head, 2);

console.log(newHead.val);   
