function greet(name) {
    console.log(`Welcome to our website, ${name}`);
}

function signUp() {
    let name = prompt(`Enter your name: `);
    greet(name);
    return "True";
}

console.log(signUp());