class HashTable {
  // default to a prime number to reduce the collision
  // default an empty array to every address to solve collision via separate chaining and also makes code more succinct
  constructor(size = 53) {
    // new Array(size),fill([]) will fill the same array to every address
    // spread the array, set missing elements to undefined, then map undefined to an empty array to create destinguish arrays
    this.data = [...new Array(size)].map(() => []);
  }

  // key -> address
  _hash(key) {
    let hash = 0;
    // add 100 to try not to be with linear time complexity
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = hash + key.charCodeAt(i) * i;
    }
    // add a prime to reduce rthe collision
    hash = (hash * 31) % this.data.length;
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    // subarray = arrayOfKeyValuePairsWithTheSameAddress
    const subarray = this.data[address];
    // LOOP OVER subarray
    for (let i = 0; i < subarray.length; i++) {
      // IF key matches
      if (subarray[i][0] === key) {
        // THEN return value
        return subarray[i][1];
      }
    }
    return null; // IF not found anything
  }

  // [..., [['grapes', 10000], ['XXX, 123'], ,,,], [[apple, 85]], ...]
  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].length; j++) {
        keys.push(this.data[i][j][0]);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].length; j++) {
        // deal with duplicated data
        if (!values.includes(this.data[i][j][1])) {
          values.push(this.data[i][j][1]);
        }
      }
    }
    return values;
  }
}

const hashTable = new HashTable(13);
hashTable.set('grapes', 10000);
hashTable.set('abc', 123);
hashTable.set('apple', 85);
console.log(hashTable.data);
console.log(hashTable.get('apple'));
console.log(hashTable.keys());
console.log(hashTable.data);
