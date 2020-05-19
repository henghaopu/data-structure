class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // for future usage when we have same priority
    this.insertTime = Date.now();
  }
}

// min binary heap
class PriorityQueue {
  heap = [];
  // O(log n)
  enqueue(val, priority) {
    this.heap.push(new Node(val, priority));
    let current = this.heap.length - 1;
    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);
      if (this.heap[current].priority >= this.heap[parent].priority) break;
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
  // extractMin
  dequeue() {
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
      let min;
      if (leftChild) min = left;
      if (rightChild) min = right;
      if (leftChild && rightChild) {
        leftChild.priority < rightChild.priority ? (min = left) : (min = right);
      }
      // no swap & end the loop
      if (this.heap[min].priority >= this.heap[current].priority) break;
      // swap (update heap)
      [this.heap[current], this.heap[min]] = [
        this.heap[min],
        this.heap[current],
      ];
      current = min;
    }

    return removedElement;
  }
}

const pq = new PriorityQueue();
console.log(JSON.stringify(pq.enqueue('', 41)));
console.log(JSON.stringify(pq.enqueue('', 39)));
console.log(JSON.stringify(pq.enqueue('', 33)));
console.log(JSON.stringify(pq.enqueue('', 18)));
console.log(JSON.stringify(pq.enqueue('', 27)));
console.log(JSON.stringify(pq.enqueue('', 12)));
console.log(JSON.stringify(pq.enqueue('', 55)));
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
console.log(pq.dequeue());
console.log(JSON.stringify(pq.heap));
