"use strict";

///////////////////////////////////////////////////////
//////////// Binary Heap /////////////
///////////////////////////////////////////////////////
function swap(arr, index1, index2) {
  let temp;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    if (this.values.length > 1) {
      // to get parent node index --> (n - 1) / 2
      let curChildIndex = this.values.length - 1;
      let parentIndex = Math.floor((curChildIndex - 1) / 2);
      while (val > this.values[parentIndex] && parentIndex >= 0) {
        // swap inserted child node with parent node
        swap(this.values, curChildIndex, parentIndex);
        // recalculate parent&child indexes
        curChildIndex = parentIndex;
        parentIndex = Math.floor((curChildIndex - 1) / 2);
      }
    }

    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) {
      return undefined;
    }

    const maxEl = this.values[0];
    if (this.values.length === 1) {
      this.values = [];
    } else {
      const lastEl = this.values.pop();
      this.values[0] = lastEl;

      let leftIndex, rightIndex, leftChild, rightChild;
      let parentIndex = 0;
      let swapIndex = 0;
      while (true) {
        // get l-child & right-child indexes
        leftIndex = 2 * parentIndex + 1;
        rightIndex = leftIndex + 1;

        if (leftIndex >= this.values.length || this.values[swapIndex] < lastEl)
          break;

        leftChild = this.values[leftIndex];
        if (rightIndex < this.values.length) {
          rightChild = this.values[rightIndex];
        } else {
          rightChild = null;
        }

        ///////////// get max value between parent and its two children & swap parent with the max of the two ////////////
        //1- get index of max value between the two children(right & left)
        if (leftChild >= rightChild || !rightChild) {
          swapIndex = leftIndex;
        } else {
          swapIndex = rightIndex;
        }
        //2- compare the lastEl with maximum of the two Children
        if (this.values[swapIndex] > lastEl) {
          // swap the two items
          swap(this.values, swapIndex, parentIndex);
          parentIndex = swapIndex;
        }
      }
    }

    console.log(this.values);
    return maxEl;
  }
}

// const heap = new MaxBinaryHeap();
// heap.insert(100);
// heap.insert(19);
// heap.insert(36);
// heap.insert(17);
// heap.insert(12);
// heap.insert(25);
// heap.insert(5);
// heap.insert(9);
// heap.insert(15);
// heap.insert(6);
// heap.insert(11);
// heap.insert(13);
// heap.insert(8);
// heap.insert(1);
// console.log(heap.insert(4));
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());

///////////////////////////////////////////////////////
//////////// Priority Queue /////////////
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
    if (this.values.length === 1) {
      this.values = [];
    } else {
      const lastEl = this.values.pop();
      this.values[0] = lastEl;

      let leftIndex, rightIndex, leftChild, rightChild;
      let parentIndex = 0;
      let swapIndex = 0;
      while (true) {
        // get l-child & right-child indexes
        leftIndex = 2 * parentIndex + 1;
        rightIndex = leftIndex + 1;

        // breaking the loop condition
        if (
          leftIndex >= this.values.length ||
          this.values[swapIndex].priority > lastEl.priority
        )
          break;

        // get correct leftChild & rightChild
        leftChild = this.values[leftIndex];
        if (rightIndex < this.values.length) {
          rightChild = this.values[rightIndex];
        } else {
          rightChild = null;
        }

        ///////////// get min value between parent and its two children & swap parent with the min of the two ////////////
        //1- get index of min value between the two children(right & left)
        if (!rightChild || leftChild.priority <= rightChild?.priority) {
          swapIndex = leftIndex;
        } else {
          swapIndex = rightIndex;
        }
        //2- compare the lastEl with minimum of the two Children
        if (this.values[swapIndex].priority < lastEl.priority) {
          // swap the two items
          swap(this.values, swapIndex, parentIndex);
          parentIndex = swapIndex;
        }
      }
    }

    console.log(this.values);
    return minEl;
  }
}

const prQueue = new PriorityQueue();
console.log(prQueue.enqueue("low fever", 2));
console.log(prQueue.enqueue("concussion", 1));
console.log(prQueue.enqueue("head Explosion", 0));
console.log(prQueue.enqueue("drunk", 5));
console.log(prQueue.enqueue("low fever", 4));
prQueue.dequeue();
prQueue.dequeue();
prQueue.dequeue();
console.log(prQueue.enqueue("flu", 3));
prQueue.dequeue();
