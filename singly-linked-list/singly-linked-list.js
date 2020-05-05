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
}

const singlyLinkedList = new SinglyLinkedList();