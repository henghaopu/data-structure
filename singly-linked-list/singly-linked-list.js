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

    // general case
    let current = this.head;
    let previous = this.head;
    while (current !== this.tail) {
      previous = current;
      current = current.next;
    }
    // now current points to tail, previous -> the node right before the tail
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    // edge case 2: initially one node
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    //edge case: no node
    if (!this.length) return null;
    // general case
    let shiftedNode = this.head;
    this.head = this.head.next;
    this.length--;
    // edge case: initial one node
    if (!this.length) this.tail = null;

    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    // edge case: no node
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //general case
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.unshift(1);
// singlyLinkedList.push(2);
// singlyLinkedList.push(3);
// console.log(singlyLinkedList.shift());
// console.log(singlyLinkedList.shift());
// console.log(singlyLinkedList.shift());
console.log(singlyLinkedList)