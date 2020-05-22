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
}

const graph = new Graph();
graph.addVertex('The Professor');
graph.addVertex('Tokyo');
graph.addVertex('Rio');
graph.addVertex('Nairobi');
graph.addVertex('Berlin');
graph.addVertex('Moscow');
graph.addVertex('Denver');
graph.addVertex('Stockholm');
graph.addVertex('Helsinki');
graph.addVertex('Lisbon');
graph.addVertex('Palermo');
graph.addVertex('Bogotá');
graph.addVertex('Marseille');
graph.addVertex('Manila');

graph.addEdge('The Professor', 'Berlin');
graph.addEdge('Berlin', 'Palermo');
graph.addEdge('The Professor', 'Lisbon');
graph.addEdge('The Professor', 'Marseille');

graph.addEdge('Tokyo', 'Rio');
graph.addEdge('Rio', 'Denver');
graph.addEdge('Denver', 'Stockholm');
graph.addEdge('Denver', 'Moscow');
graph.addEdge('Denver', 'Manila');
graph.addEdge('Moscow', 'Manila');

graph.addEdge('Tokyo', 'Nairobi');
graph.addEdge('Nairobi', 'Helsinki');
graph.addEdge('Nairobi', 'Bogotá');

console.log(graph.adjacencyList);

graph.removeVertex('Moscow');

console.log(graph.adjacencyList);
