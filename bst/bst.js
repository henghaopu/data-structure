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
    const newNode = new Node(val);
    // edge case: no node 
    if (!this.root) {
      this.root = newNode;
      return this;
    } 
    let current = this.root;
    while(true) {
      // go left
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } 
        current = current.left;
      } else if (val > current.val) {
        // go right
        if (!current.right) {
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
  search(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current
      else if (val < current.val) current = current.left;
      else current = current.right;
    }
    return null;
  }
}

const bst = new BST()
bst.insert(10)
bst.insert(13)
bst.insert(17)
bst.insert(11)
bst.insert(8)
bst.insert(5)
bst.insert(3)
console.log(bst.search(3))
console.log(bst.search(2))
console.log(bst.search(17))
console.log(bst.search(18))