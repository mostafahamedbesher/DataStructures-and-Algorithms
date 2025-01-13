"use strict";

///////////////////////////////////////////////////////
//////////// Singly Linked List /////////////
///////////////////////////////////////////////////////
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    // if linked list is empty
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return this;
  }

  traverse() {
    let curPointer = this.head;
    while (curPointer) {
      console.log(curPointer.val);
      curPointer = curPointer.next;
    }
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const poppedValue = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      // this.head.next = null;
    } else {
      // loop until we reach finalposition - 1
      let curPointer = this.head;

      while (curPointer.next !== this.tail) {
        curPointer = curPointer.next;
      }

      this.tail = curPointer;
      this.tail.next = null;
    }

    this.length--;
    return poppedValue;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const value = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previousHead = this.head;
      this.head = previousHead.next;
      previousHead.next = null;
    }

    this.length--;
    return value;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.tail = node;
    }

    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return undefined;
    }

    let curPointer = this.head;
    let curPosition = 0;
    while (curPosition !== position) {
      curPosition++;
      curPointer = curPointer.next;
    }

    return curPointer.val;
  }

  set(value, position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return false;
    }

    let curPointer = this.head;
    let curPosition = 0;
    while (curPosition !== position) {
      curPosition++;
      curPointer = curPointer.next;
    }

    curPointer.val = value;
    return true;
  }

  insert(value, position) {
    if (position < 0 || position > this.length) {
      return false;
    }
    // create new Node
    const node = new Node(value);
    // check if list is empty
    if (position === 0) {
      // call unshift method
      this.unshift(value);
    } else if (position === this.length) {
      // call push method
      this.push(value);
    } else {
      let curPointer = this.head;
      let nextPointer;
      let curPosition = 0;
      while (curPosition !== position - 1) {
        curPointer = curPointer.next;
        curPosition++;
      }
      nextPointer = curPointer.next;
      curPointer.next = node;
      node.next = nextPointer;
      this.length++;
    }

    return true;
  }

  remove(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return false;
    }

    if (position === 0) {
      // call shift method
      this.shift();
    } else if (position === this.length - 1) {
      // call pop method
      this.pop();
    } else {
      let curPointer = this.head;
      let curPosition = 0;
      while (curPosition !== position - 1) {
        curPointer = curPointer.next;
        curPosition++;
      }
      curPointer.next = curPointer.next.next;
      curPointer.next.next = null;
      this.length--;
    }

    return true;
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }

    let curPointer = this.head;
    let nextPointer = this.head.next;
    let prevPointer = null;
    while (curPointer !== null) {
      // change the Node Next Pointer to be the Previous
      curPointer.next = prevPointer;
      // increment pointers
      prevPointer = curPointer;
      curPointer = nextPointer;
      nextPointer = nextPointer?.next;
    }
    // set the new head & tail
    this.tail = this.head;
    this.head = prevPointer;
  }

  getLength() {
    return this.length;
  }
}

const list = new SinglyLinkedList();
//////////// push method /////////////
list.push("5");
list.push("48");
list.push("mostafa");
list.push("besher");
list.traverse();
console.log("***************************");

//////////// pop method /////////////
// console.log("popped", list.pop());
// list.traverse();
// console.log("popped", list.pop());
// list.traverse();

//////////// shift method /////////////
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());

//////////// unshift method /////////////
// list.unshift("hamed");
// console.log(list);

//////////// get method /////////////
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.get(1));
// console.log(list.get(4));

//////////// set method /////////////
// list.set(15, 1);
// console.log(list);
// list.set(10, 4);
// list.set(10, -2);

//////////// insert method /////////////
// list.insert("ahmed", 2);
// console.log("***************************");
// list.insert("besher", 3);
// list.traverse();
// console.log("***************************");
// list.insert(100, 5);
// list.traverse();
// console.log("***************************");
// list.insert(1, 0);
// list.traverse();
// console.log("***************************");
// list.insert("kamal", 1);
// list.traverse();

//////////// remove method /////////////
// console.log("***************************");
// list.remove(1);
// list.traverse();
// console.log(list);
// console.log("***************************");
// list.remove(0);
// list.traverse();
// console.log(list);
// console.log("***************************");
// console.log(list.remove(-1));
// list.traverse();
// console.log(list);

//////////// reverse method /////////////
list.reverse();
list.traverse();
console.log(list);
