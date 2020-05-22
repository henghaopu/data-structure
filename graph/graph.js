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
}

const graph = new Graph();
graph.addVertex('Tokyo');
console.log(graph.adjacencyList);
