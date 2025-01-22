"use strict";

///////////////////////////////////////////////////////
//////////// Binary Search Tree /////////////
///////////////////////////////////////////////////////
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let curPointer = this.root;

      while (true) {
        if (val === curPointer.val) {
          return undefined;
        } else if (val > curPointer.val) {
          // check on right of the tree
          if (!curPointer.right) {
            curPointer.right = newNode;
            break;
          }
          curPointer = curPointer.right;
        } else {
          // check on left of the tree
          if (!curPointer.left) {
            curPointer.left = newNode;
            break;
          }
          curPointer = curPointer.left;
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) {
      return undefined;
    }

    let isFound = false;
    let curPointer = this.root;
    while (curPointer !== null) {
      if (curPointer.val === val) {
        isFound = true;
        break;
      }
      // search the right side
      if (val > curPointer.val) {
        curPointer = curPointer.right;
      } else {
        // search the left side
        curPointer = curPointer.left;
      }
    }
    return isFound;
  }

  breadthFirstSearch() {
    if (!this.root) return undefined;

    const queue = [];
    const visited = [];
    let curNode;

    queue.push(this.root);
    while (queue.length > 0) {
      curNode = queue.shift();
      visited.push(curNode.val);
      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    return visited;
  }

  depthFirstPreorder() {
    const visited = [];
    function traverse(node) {
      // base case
      if (node === null) return visited;

      // recursive case
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  depthFirstPostorder() {
    const visited = [];
    function traverse(node) {
      // base case
      // if (node === null) return visited;

      // recursive case
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);
    return visited;
  }

  depthFirstInorder() {
    const visited = [];
    function traverse(node) {
      // base case
      // if (node === null) return visited;

      // recursive case
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

const binaryTree = new BinarySearchTree();
/////////////////insert///////////////
// console.log(binaryTree.insert(10));
// console.log(binaryTree.insert(15));
// console.log(binaryTree.insert(3));
// console.log(binaryTree.insert(20));
// console.log(binaryTree.insert(9));
// console.log(binaryTree.insert(5));

console.log(binaryTree.insert(10));
console.log(binaryTree.insert(6));
console.log(binaryTree.insert(15));
console.log(binaryTree.insert(20));
console.log(binaryTree.insert(3));
console.log(binaryTree.insert(8));

/////////////////find///////////////
// console.log(binaryTree.find(9));
// console.log(binaryTree.find(19));
// console.log(binaryTree.find(3));

/////////////////Breadth First Search///////////////
console.log(binaryTree.breadthFirstSearch());

/////////////////Depth First Search(preOrder)///////////////
console.log(binaryTree.depthFirstPreorder());

/////////////////Depth First Search(postOrder)///////////////
console.log(binaryTree.depthFirstPostorder());
//
/////////////////Depth First Search(inOrder)///////////////
console.log(binaryTree.depthFirstInorder());
