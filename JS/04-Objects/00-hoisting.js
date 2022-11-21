/**
    Global Execution Context

        -> phases consist of `global` object, `this` object, scope change

        => creation phase
            - function calls before defining functions works as 
            the compiler finds the functions and stores it in memory
            before compilation

        => execution phase
            
*/

/*
var num2;
console.log(num2);
// undefined

console.log(num); // no errors
var num = 5;
// undefined

// `var` is read by the compiler in creation phase,
// but the value of `var` is not stored
*/

/*
console.log(num);
let num = 1;
// ReferenceError: Cannot access 'num' before initialization
*/

/*
sayHi();

function sayHi() {
	console.log("hi !");
}
// this works, no errors 
*/

/*
sayHi();

const sayHi = function () {
	console.log("hi !");
};
// ReferenceError: Cannot access 'sayHi' before initialization
*/
