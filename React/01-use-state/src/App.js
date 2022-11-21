import "./App.css";
import { useState } from "react";
// useState is a hook

function App() {
	/*
	let age = 0;

	const increaseAge = () => {
		age = age + 1;
		console.log(age);
	};
	// value of age changes but it does reflect in the website
	// as the react render the website once
	*/

	// :: Increase Age ::
	const [age, setAge] = useState(0);
	// when the value of useState changes, react updates the website
	const increaseAge = () => {
		setAge(age + 1);
	};

	// :: Display Input ::
	const [inputValue, setInputVal] = useState("");

	const handleInputChange = (event) => {
		setInputVal(event.target.value);
	};

	// :: Show / Hide Text ::
	const [showText, setShowText] = useState(true);

	// :: Increment Decrement Reset
	const [counter, setCounter] = useState(0);

	return (
		<div className="App">
			<h1>{age}</h1>
			<button onClick={increaseAge}> Increase Age</button>
			{/* onClick is an event listener */}
			<hr></hr>

			<h1>{inputValue}</h1>
			<input type="text" onChange={handleInputChange} />
			{/* onChange is an event listener */}
			<hr></hr>

			<button
				onClick={() => {
					setShowText(!showText);
				}}>
				Show / Hide
			</button>
			{showText && <h1>React ⚛️</h1>}
			<hr></hr>

			<h1>{counter}</h1>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}>
				+ 1
			</button>
			<button
				onClick={() => {
					setCounter(0);
				}}>
				0
			</button>
			<button
				onClick={() => {
					setCounter(counter - 1);
				}}>
				- 1
			</button>
		</div>
	);
}

export default App;
