class MaxBinaryHeap {
  heap = [];

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
}

const mbh = new MaxBinaryHeap();
mbh.insert(10);
mbh.insert(5);
mbh.insert(8);
mbh.insert(1);
mbh.insert(3);
mbh.insert(2);
mbh.insert(15);
console.log(mbh.heap);
