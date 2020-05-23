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

// const graph = new Graph();
// graph.addVertex('The Professor');
// graph.addVertex('Tokyo');
// graph.addVertex('Rio');
// graph.addVertex('Nairobi');
// graph.addVertex('Berlin');
// graph.addVertex('Moscow');
// graph.addVertex('Denver');
// graph.addVertex('Stockholm');
// graph.addVertex('Helsinki');
// graph.addVertex('Lisbon');
// graph.addVertex('Palermo');
// graph.addVertex('Bogotá');
// graph.addVertex('Marseille');
// graph.addVertex('Manila');

// graph.addEdge('The Professor', 'Berlin');
// graph.addEdge('Berlin', 'Palermo');
// graph.addEdge('The Professor', 'Lisbon');
// graph.addEdge('The Professor', 'Marseille');

// graph.addEdge('Tokyo', 'Rio');
// graph.addEdge('Rio', 'Denver');
// graph.addEdge('Denver', 'Stockholm');
// graph.addEdge('Denver', 'Moscow');
// graph.addEdge('Denver', 'Manila');
// graph.addEdge('Moscow', 'Manila');

// graph.addEdge('Tokyo', 'Nairobi');
// graph.addEdge('Nairobi', 'Helsinki');
// graph.addEdge('Nairobi', 'Bogotá');

// console.log(graph.adjacencyList);

// graph.removeVertex('Moscow');

// console.log(graph.adjacencyList);