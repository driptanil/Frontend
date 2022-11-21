import "./App.css";
import { Lang } from "./Lang";
// importing Lang component

// CSS Modules:
// - import styles from ./App.module.css
// - usage: class={styles.name}"

function App() {
	const name = "Driptanil";
	const nameTag = <h1>React ⚛️</h1>;

	let iq = 100;
	iq = 200;
	const isGenius = iq > 100;

	const languages = [
		{ name: "html", difficulty: 1 },
		{ name: "css", difficulty: 2 },
		{ name: "javascript", difficulty: 5 },
		{ name: "react", difficulty: 3 },
	];

	return (
		<div className="App">
			<h1>Hello World 👋🌏 {name}</h1>
			{nameTag}

			<GetNameComponent />
			{/* calling React Component */}

			<User name="Driptanil" age={19} email="drip@drippy.com" />
			{/* Alert⚠️: Integers are placed in {} */}
			<Job salary="120000" role="Junior SDE" company="Google" />

			{/* Conditional Rendering */}
			<div className="iq">
				<h4>IQ = {iq}</h4>
				<h5 style={{ color: isGenius && "cyan" }}>
					{isGenius ? "Genius" : "Average"}
				</h5>
			</div>

			{/* Using Iterables */}
			<div className="language">
				{languages.map((value, key) => {
					return (
						<div className="lang">
							<Lang
								name={value.name}
								difficulty={value.difficulty}></Lang>
						</div>
					);
				})}
			</div>
		</div>
	);
	// JSX -> JS + HTML
}

/*
const getName = () => {
  return "Driptanil"
};
// JS Function which return primitive datatypes
*/

const GetNameComponent = () => {
	return <h1>Javascript Framework</h1>;
};
// React Component which return JSX
// Alert ⚠️: start with CAPITAL letters

const User = (props) => {
	return (
		<div className="user">
			<p>name: {props.name}</p>
			<p>age: {props.age}</p>
			<p>email: {props.email}</p>
		</div>
	);
};
// `props` are used as parameters of a React Component

const Job = (props) => {
	return (
		<div className="job">
			<p>company: {props.company}</p>
			<p>salary: {props.salary}</p>
			<p>role: {props.role}</p>
		</div>
	);
};
export default App;
