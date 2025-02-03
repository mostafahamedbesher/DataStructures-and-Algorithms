"use strict";

///////////////////////////////////////////////////////
//////////// Hash Tables /////////////
///////////////////////////////////////////////////////
class HashTable {
  constructor(length = 53) {
    this.keyMap = new Array(length);
  }

  _hash(key = "") {
    let total = 0;
    const primeNumber = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * primeNumber + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    // handle collisions
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      const dataArr = this.keyMap[index];
      for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].at(0) === key) {
          return dataArr[i].at(1);
        }
      }
    }

    return undefined;
  }

  keys() {
    // get unique values only
    const keysArr = this.keyMap
      .flat()
      .map((item) => item[0])
      .filter((value, index, arr) => arr.indexOf(value) === index);
    return keysArr;
  }

  values() {
    // get unique values only
    //   const valuesArr = [];
    // for (let i = 0; i < this.keyMap.length; i++) {
    //   if (this.keyMap[i]) {
    //     for (let j = 0; j < this.keyMap[i].length; j++) {
    //       if (!valuesArr.includes(this.keyMap[i][j][1])) {
    //         valuesArr.push(this.keyMap[i][j][1]);
    //       }
    //     }
    //   }
    // }

    //// another solution
    // get unique values only
    const valuesArr = this.keyMap
      .flat()
      .map((item) => item[1])
      .filter((value, index, arr) => arr.indexOf(value) === index);

    return valuesArr;
  }
}

const table = new HashTable(17);

//////////// set method //////////
table.set("pink", "#ffc0cb");
table.set("cyan", "#00ffff");
table.set("blue", "#0000ff");
table.set("black", "#000");
table.set("white", "#fff");
table.set("red", "#ff0000");
table.set("green", "#008000");
table.set("yellow", "#ffff00");
table.set("orange", "#ffa500");
table.set("orangered", "#ff4500");
table.set("orangered", "#ff4500");

console.log(table.keyMap);

//////////// get method //////////
console.log(table.get("black"));
console.log(table.get("cyan"));
console.log(table.get("orange"));
console.log(table.get("pink"));
console.log(table.get("orangered"));
console.log(table.get("salmon"));

//////////// keys method //////////
console.log(table.keys());
console.log(table.values());
