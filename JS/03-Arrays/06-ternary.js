const names = ["ab", "bcd", "cdef"];

const check = names.map(function (name) {
	return name.length < 3 ? name : false;
});

console.log(check); // [ 'ab', false, false ]
