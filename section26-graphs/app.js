"use strict";

///////////////////////////////////////////////////////
//////////// Graphs /////////////
///////////////////////////////////////////////////////

///////////****** this is Undirected Graph Implementation ******////////////
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      !this.adjacencyList[vertex1].includes(vertex2)
    ) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      // 1- remove the vertex connections from all other vertices
      this.adjacencyList[vertex].forEach((vertex2) =>
        this.removeEdge(vertex, vertex2)
      );
      // 2- remove the vertex from the adjacencyList
      const { [vertex]: removedVertex, ...newList } = this.adjacencyList;
      this.adjacencyList = newList;
    }
  }
}

const graph = new Graph();

/////// addVertex method ///////
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph);

/////// addEdge method ///////
graph.addEdge("A", "B");
graph.addEdge("A", "C");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.addEdge("E", "D");
console.log(graph);

/////// removeEdge method ///////
// graph.removeEdge("C", "A");
// graph.removeEdge("B", "A");

/////// removeVertex method ///////
// graph.removeVertex("B");
// graph.removeVertex("C");
