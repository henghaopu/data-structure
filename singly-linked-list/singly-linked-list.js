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

  // retrive a node by its position in the linked list
  get(index) {
    // edge case: check if index is valid
    if (index < 0 || index >= this.length) return null;
    // general case
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(index, val) {
    let chosenNode = this.get(index);
    if (chosenNode) {
      chosenNode.val = val;
      return true;
    } 
    return false;
  }

  insert(index, val) {
    // edge case: check if index is valid
    if (index < 0 || index > this.length) return false;
    // edge case: most right
    if (index === this.length) return !!this.push(val);
    // edge case: most left
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    // edge cases
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removingNode = previousNode.next;
    previousNode.next = previousNode.next.next;
    this.length--;
    return removingNode;
  }

  reverse() {
    // swap head and tail
    [this.head, this.tail] = [this.tail, this.head];
    // initialize pointers
    let previous = null;
    let current = this.tail;
    let next = current.next;
    // loop through current
    for (let i = 0; i < this.length; i++) {
      // connect 
      current.next = previous;
      // update/move forward pointers for next iteration (start from previous beacuse we will abandon the value of previous)
      previous = current;
      current = next;
      next = current ? current.next : null;
    }

    return this;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
console.log(singlyLinkedList.reverse());
// console.log(singlyLinkedList.shift());
// console.log(singlyLinkedList.shift());
// console.log(singlyLinkedList.shift());
// console.log(singlyLinkedList)