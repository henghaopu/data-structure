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
      // redundant 
      // if (!this.head.next) {
      //   this.head.next = newNode;
      //   this.tail = newNode;
      // }
      this.tail.next = newNode;
      this.tail = newNode; 
    }
    this.length++;
    return this;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
console.log(singlyLinkedList.push(2));