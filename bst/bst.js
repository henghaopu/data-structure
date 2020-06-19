class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //      10
  //    5     13
  //   3 8  11  17

  // best & avaerage time: O(log n); worse case: O(n)
  insert(val) {
    //* CREATE
    const newNode = new Node(val);
    // edge case: no node
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // go left
      if (val < current.val) {
        if (!current.left) {
          //* CONNECT
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        // go right
        if (!current.right) {
          //* CONNECT
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return null;
      }
    }
  }
  // best & averabe time: O(log n);  worse case: O(n)
  // Level Search
  search(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      else if (val < current.val) current = current.left;
      else current = current.right;
    }
    return null;
  }

  bfs() {
    let visited = [];
    //* CREATE, enqueue
    let queue = [this.root]; // Spcae: O(n)
    // Time: O(n)
    while (queue.length) {
      //* DEQUEUE, record
      const shiftedNode = queue.shift();
      //* ENQUEUE
      if (shiftedNode.left) queue.push(shiftedNode.left);
      if (shiftedNode.right) queue.push(shiftedNode.right);
      visited.push(shiftedNode.val);
    }
    return visited;
  }

  dfsPreorderIterative() {
    let visited = [];
    //* CREATE, push
    let stack = [this.root]; // Spcae: O(n)
    // Time: O(n)
    while (stack.length) {
      //* POP
      const poppedNode = stack.pop();
      //* RECORD once being popped from the stack
      visited.push(poppedNode.val);
      //* PUSH
      if (poppedNode.right) stack.push(poppedNode.right);
      if (poppedNode.left) stack.push(poppedNode.left);
    }
    return visited;
  }

  // (not done)
  // dfsPreorderIterative2() {
  //   //* CREATE stack, push root
  //   let stack = [this.root];
  //   //* RECORD
  //   let visited = [this.root.val];
  //   // Time: O(n)
  //   while (stack.length) {
  //     //* POP
  //     const poppedNode = stack.pop();

  //     //* PUSH
  //     if (poppedNode.right) {
  //       stack.push(poppedNode.right)
  //       //* RECORD once being pushed into stack
  //       visited.push(poppedNode.right.val)
  //     };
  //     if (poppedNode.left) {
  //       stack.push(poppedNode.left)
  //       //* RECORD once being pushed into stack
  //       visited.push(poppedNode.left.val)
  //     };
  //   }
  //   return visited;
  // }

  // pros: first node is the root node, so it's good for storing the data in db and then reconstructing the tree from it
  dfsPreOrder() {
    let visited = [];

    //* CREATE callstack, push (DECLARE & CALL)
    // (just map words to iterative way)
    (function visit(node) {
      //* RECORD once being pushed into callstack
      visited.push(node.val);
      //* PUSH into callstack (CALL)
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    })(this.root);
    //* POP from callstack

    return visited;
  }

  dfsPostOrder() {
    const visited = [];
    (function visit(node) {
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      visited.push(node.val);
    })(this.root);

    return visited;
  }
  // pros:
  dfsInOrder() {
    const visited = [];

    (function visit(node) {
      if (node.left) visit(node.left);
      visited.push(node.val);
      if (node.right) visit(node.right);
    })(this.root);

    return visited;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(13);
bst.insert(17);
bst.insert(11);
bst.insert(8);
bst.insert(5);
bst.insert(3);
console.log(bst.search(3));
console.log(bst.search(2));
console.log(bst.search(17));
console.log(bst.search(18));
