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
}

const binaryTree = new BinarySearchTree();
/////////////////insert///////////////
console.log(binaryTree.insert(10));
console.log(binaryTree.insert(15));
console.log(binaryTree.insert(3));
console.log(binaryTree.insert(20));
console.log(binaryTree.insert(9));
console.log(binaryTree.insert(5));
/////////////////find///////////////
console.log(binaryTree.find(9));
console.log(binaryTree.find(19));
console.log(binaryTree.find(3));
