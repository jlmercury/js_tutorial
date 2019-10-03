// Returns the last element of an array.
Array.prototype.last = function () {
  return this.slice(this.length-1);
};

Array.prototype.final = function () {
  return this[this.length-1];
};
