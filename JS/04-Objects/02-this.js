/*
console.log(this);
// Window http://127.0.0.1:5501/JS/04-Objects/index.html
*/

/*
const user = {
	name: "driptanil",
	info() {
		console.log(this);
        // { name: 'driptanil', sayHi: [Function: sayHi] }

		console.log(this.name);
        // driptanil
	},
};

user.info();
*/

/*
const usr = {
	name: "user",
};
const admin = {
	name: "administrator",
};

function information() {
	console.log(this.name);
}

usr.info = information;
admin.info = information;

console.log(usr.info()); // user
console.log(admin.info()); // administrator
*/

/*
const user = {
	name: "driptanil",
	lang: ["html", "css", "js"],
	info() {
		console.log(`Hi 👋! ${this.name}`);

		const totalLang = function () {
			console.log(`Total Languages: ${this.lang.length}`);
		};
		totalLang();
	},
};

user.info();
// TypeError: Cannot read properties of undefined (reading 'length')
// definition of `this` got changed 
*/

/* const user = {
	name: "Driptanil",
	lang: ["html", "css", "js"],
	info() {
		const self = this;
		console.log(`Hi 👋! ${this.name}`);

		const totalLang = function () {
			console.log(`Total Languages: ${self.lang.length}`);
		};
		totalLang();
	},
};

user.info();
/* Output:
    Hi 👋! Driptanil
    Total Languages: 3
*/

/*
const user = {
	name: "driptanil",
	lang: ["html", "css", "js"],
	info() {
		console.log(`Hi 👋! ${this.name}`);

		const totalLang = () =>{
			console.log(`Total Languages: ${this.lang.length}`);
		};
		totalLang();
	},
};

user.info();
// No Error
// definition of `this` doesn't got changed, by using arrow functions
/* Output:
    Hi 👋! Driptanil
    Total Languages: 3
*/
