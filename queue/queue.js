class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // push from tail
  enqueue(val) {
    //* CREATE
    const newNode = new Node(val);
    // edge case: x node
    if (!this.size) {
      //* MOVE
      this.head = newNode;
      this.tail = newNode;
    } else {
      //* CONNECT
      this.tail.next = newNode;
      //* MOVE
      this.tail = newNode;
    }

    return ++this.size;
  }

  // shift out from head
  dequeue() {
    // edge case: x node
    if (!this.size) return null;
    //* RECORD
    const dequeuingNode = this.head;
    // edge case: 1 node
    if (this.size === 1) {
      //* BREAK
      this.head = null;
      this.tail = null;
    } else {
      //* MOVE
      this.head = this.head.next;
    }

    this.size--;
    return dequeuingNode.val;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
