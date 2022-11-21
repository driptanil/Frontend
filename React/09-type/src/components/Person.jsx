import PropTypes from "prop-types";
// `npm install prop-types`

// Generally, any type error causes the website to break

// Prop-types, prevent the website from breaking and gives type alert in console 

export const Person = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
            {/* Type Error: name is not string */}

			<p>Age: {props.age}</p>
            {/* Type Error: age is not number */}

			<p>Email: {props.email}</p>
            {/* Type Error: email is not email */}

			<p>Married: {props.isMarried ? "True" : "False"}</p>
            {/* Type Error: isMarried is not boolean */}

			<p>
				Skills:
				{props.skills.map((skill) => (
					<li>{skill}</li>
				))}
			</p>
            {/* Type Error: skills in not array */}

		</div>
	);
};

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	email: PropTypes.string,
	isMarried: PropTypes.bool,
	skills: PropTypes.arrayOf(PropTypes.string),
};
