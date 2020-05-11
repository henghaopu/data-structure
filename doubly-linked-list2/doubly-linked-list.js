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

  shift() {
    // edge case 1: no node, return null
    if (!this.length) return null;
    // edge case 2: one node, return head, make head and tail null manually 
    let output = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return output
    }
    // general case: move head, break the two-side bond
    // null <- 1 <-> 2 <-> 3 <-> null
    //                     t
    //         o     h
    this.head = this.head.next;
    this.head.prev = null;
    output.next = null;
    this.length--;
    return output;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter;
    let current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    // current.prev = null;
    // current.next = null;
    return current;
  }

  set(index, val) {
    const chosenNode = this.get(index);
    if (chosenNode) {
      chosenNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const chosenNode = this.get(index);
    const newNode = new Node(val);
    newNode.next = chosenNode;
    newNode.prev = chosenNode.prev;
    chosenNode.prev.next = newNode;
    chosenNode.prev = newNode;
    
    this.length++;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.insert(0, 2.5))
console.log(list)