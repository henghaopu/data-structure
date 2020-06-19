class MaxBinaryHeap {
  heap = [];
  // O(log n)
  insert(val) {
    this.heap.push(val);
    let current = this.heap.length - 1;
    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);
      if (this.heap[current] <= this.heap[parent]) break;
      // swap the values
      [this.heap[current], this.heap[parent]] = [
        this.heap[parent],
        this.heap[current],
      ];
      // update the loop
      current = parent;
    }

    return this.heap;
  }
  // O(log n)
  extractMax() {
    // edge case: x node
    if (!this.heap.length) return null;
    // edge case: 1 node
    if (this.heap.length === 1) return this.heap.pop();

    // swap the first element and the last element
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const removedElement = this.heap.pop();

    // sink down
    let current = 0;
    while (true) {
      let left = current * 2 + 1;
      let right = current * 2 + 2;
      let leftChild = this.heap[left] || null;
      let rightChild = this.heap[right] || null;
      // if no child
      if (!leftChild && !rightChild) break;
      // when either one exist
      let max;
      leftChild > rightChild ? (max = left) : (max = right);
      // let max = this.heap.indexOf(Math.max(leftChild, rightChild));
      // no swap & end the loop
      if (this.heap[max] < this.heap[current]) break;
      // swap (update heap)
      [this.heap[current], this.heap[max]] = [
        this.heap[max],
        this.heap[current],
      ];
      current = max;
    }

    return removedElement;
  }
}

const mbh = new MaxBinaryHeap();
// mbh.insert(10);
// mbh.insert(8);
// mbh.insert(5);
// mbh.insert(1);
// mbh.insert(3);
// mbh.insert(2);
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);
// mbh.insert(15);
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
console.log(mbh.extractMax());
console.log(mbh.heap);
// console.log(mbh.extractMax());
// console.log(mbh.heap);
