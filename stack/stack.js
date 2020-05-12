class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // same like unshift in singly linked list
  push(val) {
    let newNode = new Node(val);
    // edge case: x node
    if (!this.size) {
      this.top = newNode;
    } else {
      // edge case: 1 node & general case: above 2 nodes are the same here  
      newNode.next = this.top;
      this.top = newNode;
    }
  
    return ++this.size
  }

  // same like shift in singly linked list
  pop() {
    // edge case: x node
    if (!this.size) return null;
    // edge case: 1 node and  general case are the same
    let poppingNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppingNode.val;
  }
}

let stack = new Stack();
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

