class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // prevent overwriting when the vertex already exists
    if (!this.adjacencyList[vertex]) {
      // add a key to the adjacency list and set the value to an empty array
      this.adjacencyList[vertex] = [];
    }
  }
  // undirected
  addEdge(v1, v2) {
    if (this.adjacencyList.hasOwnProperty(v1)) {
      this.adjacencyList[v1].push(v2);
    }
    if (this.adjacencyList.hasOwnProperty(v2)) {
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList.hasOwnProperty(v1)) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    }
    if (this.adjacencyList.hasOwnProperty(v2)) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.hasOwnProperty(vertex)) {
      const adjacentVertices = this.adjacencyList[vertex];
      for (let i = 0; i < adjacentVertices.length; i++) {
        this.removeEdge(vertex, adjacentVertices[i]);
      }
      delete this.adjacencyList[vertex];
    }
  }

  depthFirstRecursive(start) {
    const visited = {};
    // can't use this in visit function declaration
    const adjacencyList = this.adjacencyList;

    (function visit(vertex) {
      // error handling
      if (!vertex) return null;

      // put the node into visited map
      visited[vertex] = true;
      // loop over all the neighbors
      adjacencyList[vertex].forEach((neighbor) => {
        // if this neighbor haven't been visited, visit it
        if (!visited[neighbor]) return visit(neighbor);
        // base case: do nothing if the neighbor have been visited
      });
    })(start);

    return Object.keys(visited);
  }

  depthFirstIterative(start) {
    const visited = {};
    const stack = [start];

    while (stack.length) {
      // console.log(stack);
      // pop
      let currentVertex = stack.pop();
      // visit popped
      if (!visited[currentVertex]) visited[currentVertex] = true;
      // store popped vertex's neighbors
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) stack.push(neighbor);
      });
    }

    return Object.keys(visited);
  }

  breadthFirstIterative(start) {
    const enqueued = {};
    const queue = [];
    queue.push(start);
    enqueued[start] = true;

    while (queue.length) {
      console.log(queue);
      // dequeue
      let currentVertex = queue.shift();
      // enqueue neighbors
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!enqueued[neighbor]) {
          queue.push(neighbor);
          enqueued[neighbor] = true;
        }
      });
    }

    return Object.keys(enqueued);
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//            A
//          /   \
//         B     C
//         |     |
//         D  -- E
//          \   /
//            F

console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstIterative('A'));
console.log(g.breadthFirstIterative('A'));
