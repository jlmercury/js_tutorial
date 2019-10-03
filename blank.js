// Adds `blank` method to String object.
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
}
