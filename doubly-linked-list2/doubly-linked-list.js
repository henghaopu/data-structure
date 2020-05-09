class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; // * extra 1 line of code from SinglyLinkedList
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // edge case: no node
    if (!this.length) return null;
    // record the last
    const poppingNode = this.tail;
    if (this.length === 1) {
      // edge case: one node
      // null <- 1 -> null
      this.head = null;
      this.tail = null;
    } else {
      // general case: null <- 1 <-> 2 <-> 3 -> null 
      // move the tail
      this.tail = this.tail.prev;
      // break the links
      this.tail.next = null;
      poppingNode.prev = null;
    }
    this.length--;
    return poppingNode
  }


}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.pop())
console.log(list)