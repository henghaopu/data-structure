 // Linked list consist of nodes, and each node has a value and a pointer to another node or null
 class Node {
   constructor(val) {
    this.val = val;
    this.next = null
   }
 }

// what is a linked list?
// A data structure that contains a head, tail, and length properties
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }
    this.length++;
    return this;
  }

  pop() {
    // edge case 1: no node
    if (!this.length) return null;
    // edge case 2: one node
    if (this.length === 1) {
      let temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    // general case
    let current = this.head;
    let previous = null;
    while (current !== this.tail) {
      previous = current;
      current = current.next;
    }
    // now current points to tail, previous -> the node right before the tail
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    return current;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList)