"use strict";

///////////////////////////////////////////////////////
//////////// Stacks and Queus /////////////
///////////////////////////////////////////////////////
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.top = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const poppedVal = this.top.val;
    if (this.length === 1) {
      this.head = null;
      this.top = null;
    } else {
      let oldTop = this.top;
      this.top = this.top.next;
      oldTop.next = null;
    }

    this.length--;
    return poppedVal;
  }

  print() {
    if (this.length === 0) {
      return null;
    }

    let curPointer = this.top;
    while (curPointer) {
      console.log(curPointer.val);
      curPointer = curPointer.next;
    }
  }
}

/////////////////////////////////////////////
/////////////////// STACK ///////////////////

///////////// push //////////////
// const stack = new Stack();
// stack.push("Mostafa");
// stack.push("hamed");
// stack.push("Besher");
// console.log(stack);
// stack.print();
// console.log("**************************");

///////////// pop //////////////
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack);

/////////////////////////////////////////////
/////////////////// QUEUE ///////////////////
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const dequeuedVal = this.first.val;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const oldFirst = this.first;
      this.first = this.first.next;
      oldFirst.next = null;
    }
    this.length--;
    return dequeuedVal;
  }

  print() {
    if (this.length === 0) {
      return null;
    }

    let curPointer = this.first;
    while (curPointer) {
      console.log(curPointer.val);
      curPointer = curPointer.next;
    }
  }
}

const queue = new Queue();
console.log(queue.enqueue("mostafa"));
console.log(queue.enqueue("hamed"));
console.log(queue.enqueue("besher"));
console.log(queue);
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
