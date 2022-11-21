const names = ["ab", "bc", "cd"];

const check = names.every(function (name) {
	return name.includes("c");
});
// true-> all elements are true
// false -> any element is false
console.log(check); // false
