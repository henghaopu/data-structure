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
    // CREATE a new node
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // CONNECT the links
      this.tail.next = newNode;
      newNode.prev = this.tail; // * extra 1 line of code from SinglyLinkedList
      // MOVE the tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // edge case: no node
    if (!this.length) return null;
    // RECORD the last
    const poppingNode = this.tail;
    if (this.length === 1) {
      // edge case: one node
      // null <- 1 -> null
      this.head = null;
      this.tail = null;
    } else {
      // general case: null <- 1 <-> 2 <-> 3 -> null

      // MOVE the tail
      this.tail = this.tail.prev;
      // BREAK the links
      this.tail.next = null;
      poppingNode.prev = null;
    }
    this.length--;
    return poppingNode;
  }

  shift() {
    // edge case 1: no node, return null
    if (!this.length) return null;
    // edge case 2: one node, return head, make head and tail null manually
    // RECORD
    let output = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return output;
    }
    // general case: move head, break the two-side bond
    // null <- 1 <-> 2 <-> 3 <-> null
    //                     t
    //         o     h

    // MOVE the head
    this.head = this.head.next;
    // BREAK the links
    this.head.prev = null;
    output.next = null;

    this.length--;
    return output;
  }

  unshift(val) {
    // CREATE a new node
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // CONNECT the links
      newNode.next = this.head;
      this.head.prev = newNode;
      // MOVE the head
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

    const afterNode = this.get(index);
    const beforeNode = afterNode.prev;
    const newNode = new Node(val);
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    beforeNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false; // * not >
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop(); // * not this.length

    const chosenNode = this.get(index);
    const beforeNode = chosenNode.prev;
    const afterNode = chosenNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    chosenNode.prev = null;
    chosenNode.next = null;

    this.length--;
    return chosenNode;
  }

  reverse() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      [current.prev, current.next] = [current.next, current.prev];
      current = current.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.reverse());
console.log(list);
