// /*
const person = {
	firstName: "Driptanil",
	lastName: "Datta",
	name() {
		console.log(this.firstName, this.lastName);
	},
};

// person.name(); // Driptanil Datta

function registerUser(age, sex) {
	console.log(this.name(), age, sex);
}

const register = registerUser.bind(person);
register(19, "male");
// Driptanil Datta 19 male

registerUser.call(person, 19, "male");
// Driptanil Datta 19 male

registerUser.apply(person, [19, "male"]);
// Driptanil Datta 19 male

// */
