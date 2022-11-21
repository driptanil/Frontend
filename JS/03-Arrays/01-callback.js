// Callbacks, Higher Order Functions

/*
const js = ["react", "next", "node"];

js.forEach(function (elem) {
	console.log(elem + ".js");
});

/*
react.js
next.js
node.js
*/


function repeater(func) {
	func();
	func();
	func();
}

function error() {
	console.log("Error !");
}

repeater(error);

/*
Error !
Error !
Error !
*/