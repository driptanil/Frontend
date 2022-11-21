const names = ["ab", "bc", "cd"];

const search = names.filter(function (name) {
	return name.includes("c");
});
// filters all the existing element
console.log(search); // [ 'bc', 'cd' ]
