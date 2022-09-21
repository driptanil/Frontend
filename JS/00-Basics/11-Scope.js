let num = 1;
var char = 'a';


function func() {
    let num = 10;
    var char = 'b';
    console.log(num, char);
}

console.log(num, char);

func();

console.log(num, char);

if (true) {
    let num = 100; // let doesn't change value
    var char = 'c'; // var changes value
}

console.log(num, char);

// Better to use `let` and `const` than `var`