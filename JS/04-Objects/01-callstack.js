function sayHi() {
	console.log(`Hi ! ${name}`);
	changeName();
	console.log("Bye 👋");
}

function changeName() {
	name = "drip";
	console.log(`changed name -> ${name}`);
	console.log("Done ✅");
}

let name = "driptanil";

sayHi();

console.log("Finished 🏁");

/* output:
    Hi ! driptanil
    changed name -> drip
    Done ✅
    Bye 👋
    Finished 🏁
*/