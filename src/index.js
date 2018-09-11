class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortedIndices = indices.sort();
    console.log("sortedIndices", sortedIndices.toString());
    let buf = [];
    sortedIndices.forEach(index => {
      buf.push(this.array[index]);
    });
    console.log("buf", buf.toString());

    buf.sort(this.compareFunction);
    console.log("sorted buf", buf.toString());

    sortedIndices.forEach((index, bufIndex) => {
      this.array[index] = buf[bufIndex];
    });
    console.log("res array", this.array.toString());

    return this.array;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
