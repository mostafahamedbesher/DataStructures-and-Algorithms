"use strict";

///////////////////////////////////////////////////////
//////////// Dijkstra's Algorithm /////////////
///////////////////////////////////////////////////////
// priorty Queue Implemention
function swap(arr, index1, index2) {
  let temp;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    // create new Node
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    if (this.values.length > 1) {
      // to get parent node index --> (n - 1) / 2
      let curChildIndex = this.values.length - 1;
      let parentIndex = Math.floor((curChildIndex - 1) / 2);
      while (
        newNode.priority < this.values[parentIndex]?.priority &&
        parentIndex >= 0
      ) {
        // swap inserted child node with parent node
        swap(this.values, curChildIndex, parentIndex);
        // recalculate parent&child indexes
        curChildIndex = parentIndex;
        parentIndex = Math.floor((curChildIndex - 1) / 2);
      }
    }

    return this.values;
  }

  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }

    const minEl = this.values[0];
    const lastEl = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = lastEl;
      let parentIndex = 0;

      while (true) {
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;
        let swapIndex = null;

        // Check if left child exists and should be swapped
        if (
          leftIndex < this.values.length &&
          this.values[leftIndex].priority < this.values[parentIndex].priority
        ) {
          swapIndex = leftIndex;
        }

        // Check if right child exists and should be swapped
        if (
          rightIndex < this.values.length &&
          this.values[rightIndex].priority <
            (swapIndex === null
              ? this.values[parentIndex].priority
              : this.values[leftIndex].priority)
        ) {
          swapIndex = rightIndex;
        }

        // If no swaps needed, exit loop
        if (swapIndex === null) break;

        swap(this.values, parentIndex, swapIndex);
        parentIndex = swapIndex;
      }
    }

    return minEl;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      !this.adjacencyList[vertex1].includes(vertex2)
    ) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  dijkstraShortestPath(vertex1, vertex2) {
    const queue = new PriorityQueue();
    const previous = {};
    const distances = {};

    // intialize variables(intial state)
    const allVertecies = Object.keys(this.adjacencyList);
    allVertecies.forEach((vertex) => {
      if (vertex === vertex1) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
    });

    let totalDistance = 0;
    while (queue.values.length > 0) {
      // get shortest path from last visted vertex to current vertex
      let smallestVertex = queue.dequeue();
      // if we reach the final vertex(vertex 2) return the shortestpath
      if (smallestVertex.val === vertex2) {
        // we finished
        // building up the shortest path
        const path = [];
        while (previous[smallestVertex.val]) {
          path.push(smallestVertex.val);
          smallestVertex.val = previous[smallestVertex.val];
        }
        path.push(vertex1);
        path.reverse();
        return { path, distance: distances[vertex2] };
      }

      // main algorithm
      this.adjacencyList[smallestVertex.val].forEach((neighbour) => {
        // calculate distances from vertex1
        totalDistance = neighbour.weight + distances[smallestVertex.val];
        // if the new calculated distance is shorter than the last distance to the same vertex
        if (totalDistance < distances[neighbour.node]) {
          // update the distance
          distances[neighbour.node] = totalDistance;
          // update the previous vertex
          previous[neighbour.node] = smallestVertex.val;
          // put it in the priority queue
          queue.enqueue(neighbour.node, distances[neighbour.node]);
        }
      });
    }
  }
}

const graph = new WeightedGraph();

///////////////////////////////////////////////////////
/////////////// Graph Traversal///////////////////////
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "E", 1);
console.log(graph);

//////////////// Dijkstra's shotest path////////////
console.log(graph.dijkstraShortestPath("A", "E")); // A-C-D-F-E
console.log(graph.dijkstraShortestPath("A", "C"));
console.log(graph.dijkstraShortestPath("A", "F"));
