"use strict";

///////////////////////////////////////////////////////
//////////// Doubly Linked List /////////////
///////////////////////////////////////////////////////
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let curPointer = this.head;
    while (curPointer) {
      console.log(curPointer.val);
      curPointer = curPointer.next;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    // save the removed node to return its value
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode.val;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode.val;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return undefined;
    }
    // optimized version
    const mid = Math.floor(this.length / 2);
    let curPointer;
    let curPosition;

    if (position <= mid) {
      curPointer = this.head;
      curPosition = 0;
      while (curPosition !== position) {
        curPointer = curPointer.next;
        curPosition++;
      }
    } else {
      curPointer = this.tail;
      curPosition = this.length - 1;
      while (curPosition !== position) {
        curPointer = curPointer.prev;
        curPosition--;
      }
    }

    return curPointer.val;
  }

  set(value, position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    // optimized version
    const mid = Math.floor(this.length / 2);
    let curPointer;
    let curPosition;

    if (position <= mid) {
      curPointer = this.head;
      curPosition = 0;
      while (curPosition !== position) {
        curPointer = curPointer.next;
        curPosition++;
      }
    } else {
      curPointer = this.tail;
      curPosition = this.length - 1;
      while (curPosition !== position) {
        curPointer = curPointer.prev;
        curPosition--;
      }
    }

    // let curPointer = this.head;
    // let curPosition = 0;
    // while (curPosition !== position) {
    //   curPointer = curPointer.next;
    //   curPosition++;
    // }
    curPointer.val = value;
    return true;
  }

  insert(value, position) {
    if (position < 0 || position > this.length) {
      return false;
    }

    if (position === 0) {
      this.unshift(value);
    } else if (position === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      let curPointer = this.head;
      let curPosition = 0;
      while (curPosition !== position - 1) {
        curPointer = curPointer.next;
        curPosition++;
      }
      newNode.prev = curPointer;
      newNode.next = curPointer.next;
      curPointer.next.prev = newNode;
      curPointer.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return false;
    }

    if (position === 0) {
      this.shift();
    } else if (position === this.length - 1) {
      this.pop();
    } else {
      let curPointer = this.head;
      let curPosition = 0;
      while (curPosition !== position) {
        curPointer = curPointer.next;
        curPosition++;
      }
      let prevPointer = curPointer.prev;
      prevPointer.next = curPointer.next;
      curPointer.next.prev = prevPointer;
      curPointer.next = null;
      curPointer.prev = null;
      this.length--;
    }
    return true;
  }

  reverse() {
    if (this.length <= 1) return this;

    let curPointer = this.tail;
    let prevPointer = null;
    let nextPointer = this.tail.prev;

    while (curPointer) {
      // increament the pointers
      prevPointer = curPointer.next;
      nextPointer = curPointer.prev;
      // swap links between nodes
      curPointer.next = nextPointer;
      curPointer.prev = prevPointer;
      // increament curPointer
      curPointer = nextPointer;
    }
    // swap head & tail
    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;

    return this;
  }
}

const list = new DoublyLinkedList();
//////////////// push Method /////////////////
list.push("Mostafa");
list.push("Hamed");
list.push("Besher");

console.log(list);
list.print();
console.log("********************************");

//////////////// pop Method /////////////////
// console.log(list.pop());
// console.log(list);
// list.print();

//////////////// shift Method /////////////////
// console.log(list.shift());
// console.log(list);
// list.print();
// console.log("********************************");

//////////////// unshift Method /////////////////
// list.unshift(1);
// console.log(list);
// list.print();

//////////////// get Method /////////////////
// console.log(list.get(1));

//////////////// set Method /////////////////
// list.set("mohammed", 1);
// list.print();

//////////////// insert Method /////////////////
// console.log(list.insert("mohammed", 1));
// list.print();

//////////////// remove Method /////////////////
// console.log(list.remove(1));
// list.print();

//////////////// reverse Method /////////////////
// list.reverse();
// list.print();
