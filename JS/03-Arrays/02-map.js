const names = ["ab", "bc", "cd"];
const newNames = names.map(function (name) {
	return name.toUpperCase();
});

newNames.push("DE");
console.log(names, newNames); // [ 'ab', 'bc', 'cd' ] [ 'AB', 'BC', 'CD', 'DE' ]
