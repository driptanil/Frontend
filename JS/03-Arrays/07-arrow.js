const names = ["ab", "bcd", "cdef"];

const check = names.map(function (name) {
	return name.length < 3 ? name : false;
});

const arrowCheck = names.map((name) => {
	return name.length < 3 ? name : false;
});

const arrowCheck2 = names.map((name) => (name.length < 3 ? name : false));

console.log(check, arrowCheck, arrowCheck2);
// [ 'ab', false, false ] [ 'ab', false, false ] [ 'ab', false, false ]
