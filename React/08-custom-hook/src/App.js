import "./App.css";
// import { useState } from "react";
import { useToggle } from "./hooks/useToggle";

import {Cat} from './components/Cat'

function App() {
	/*
	Hooks: It is a function, which allows us to abstract logic in the react
	
	Hook Rules:
		-> starts with `use` like `useState, useEffect, useContext`
		-> cannot be called in functions
		-> has to be in the highest level of a component
		-> has to be in a component

	Hooks vs Functions:
		-> Hooks allow other hooks to be called inside them

	*/

	/* :: Using useState hook ::

	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="App">
			<button onClick={() => setIsVisible((prev) => !prev)}>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible ? <h1>Hidden Text</h1> : ""}
		</div>
	);
	*/

	const [isVisible, toggle] = useToggle();
	// const {state: isVisible, toggle} = useToggle();

	return (
		<div className="App">
			<button onClick={toggle}>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible ? <h1>Hidden Text</h1> : ""}
			<Cat />
		</div>
	);
}

export default App;
