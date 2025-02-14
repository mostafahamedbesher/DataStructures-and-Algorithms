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

  DFSRecursive(vertex) {
    const results = [];
    const visited = {};

    const traverse = (vertex) => {
      visited[vertex] = true;
      results.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        // the base case here if neighbour vertex is visited
        if (!visited[neighbour]) {
          traverse(neighbour);
        }
      });

      return results;
    };

    return traverse(vertex);
  }

  DFSIterative(vertex) {
    const results = [];
    const visited = {};

    const stack = [];
    stack.push(vertex);
    while (stack.length > 0) {
      let curVertex = stack.pop();
      if (!visited[curVertex]) {
        visited[curVertex] = true;
        results.push(curVertex);
        this.adjacencyList[curVertex].forEach((neighbour) => {
          stack.push(neighbour);
        });
      }
    }

    return results;
  }

  BFS(vertex) {
    const results = [];
    const visited = {};
    const queue = [];

    results.push(vertex);
    visited[vertex] = true;
    const traverse = (vertex) => {
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          results.push(neighbour);
          queue.push(neighbour);
        }
      });

      if (queue.length > 0) {
        traverse(queue.shift());
      }

      return results;
    };

    return traverse(vertex);
  }
}

const graph = new Graph();

/////// addVertex method ///////
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// console.log(graph);

/////// addEdge method ///////
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.addEdge("E", "D");
// console.log(graph);

/////// removeEdge method ///////
// graph.removeEdge("C", "A");
// graph.removeEdge("B", "A");

/////// removeVertex method ///////
// graph.removeVertex("B");
// graph.removeVertex("C");

///////////////////////////////////////////////////////
/////////////// Graph Traversal///////////////////////
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);

//////////////// Depth First////////////
// recursive solution
console.log(graph.DFSRecursive("A"));

// iterative solution
console.log(graph.DFSIterative("A"));
// ['A', 'C', 'E', 'F', 'D', 'B']

//////////////// Breadth First////////////
console.log(graph.BFS("A"));
// ['A', 'B', 'C', 'D', 'E', 'F']
