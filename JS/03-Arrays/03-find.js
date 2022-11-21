const names = ["ab", "bc", "cd"];

const search = names.find(function (name) {
	return name.includes("c");
});
// find the first existing element
console.log(search); //bc
