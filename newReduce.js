// Returns product of all the elements in an array
let numbers = [1, 2, 3, 4];


// product: Imperative solution
function imperativeProduct (elements) {
	let total = 1;
	elements.forEach(function (n) {
		total *= n;
	});
	return total;
}
console.log(imperativeProduct(numbers));


// product: Functional solution
function functionalProduct (elements) {
	return elements.reduce( (product, n) => { 
		return product *= n; }, 1);
}
console.log(functionalProduct(numbers));
