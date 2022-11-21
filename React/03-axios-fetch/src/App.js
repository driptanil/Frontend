import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
	/*
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  // API: `https://catfact.ninja/fact`
  // generates random fact about cats
  // it is in JSON format
  */

	/*
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  });
  // this runs infinitely (to fix this use `useEffect` hook)
  */

	const [catFact, setCatFact] = useState("");

	const fetchCatFact = () => {
		Axios.get("https://catfact.ninja/fact").then((res) => {
			setCatFact(res.data.fact);
		});
	};
	useEffect(() => {
		Axios.get("https://catfact.ninja/fact").then((res) => {
			setCatFact(res.data.fact);
		});
	}, []);
	// runs only when component is mounted

	const [name, setName] = useState("");
	const [predictedAge, setPredictedAge] = useState({});

	const fetchAge = () => {
		Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
			setPredictedAge(res.data);
		});
	};

	const [dropDown, setDropDown] = useState("");
	const [generateExcuse, setGenerateExcuse] = useState("");

	const fetchExcuse = () => {
		Axios.get(`https://excuser.herokuapp.com/v1/excuse/${dropDown}`).then(
			(res) => {
				setGenerateExcuse(res.data[0].excuse);
			}
		);
	};

	return (
		<div className="App">
			<section>
				<h1>Cat Fact</h1>
				<p>{catFact}</p>
				<button onClick={fetchCatFact}>Generate Cat Fact</button>
			</section>

			<section>
				<h1>Predict Age</h1>
				<input
					placeholder="name"
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<button onClick={fetchAge}>🔍</button>
				<p>Name: {predictedAge.name}</p>
				<p>
					Predicted Age :{" "}
					{predictedAge.age === null ? "Not found" : predictedAge.age}
				</p>
				<p>No of Data : {predictedAge.count}</p>
			</section>

			<section>
				<h1>Excuse Generator</h1>
				<label>Category:</label>
				<select
					name="Category"
					onChange={(event) => {
						setDropDown(event.target.value);
					}}>
					<option> Select </option>
					<option value="family">Family</option>
					<option value="office">Office</option>
					<option value="children">Children</option>
					<option value="college">College</option>
					<option value="party">Party</option>
					<option value="funny">Funny</option>
					<option value="unbelievable">Unbelievable</option>
					<option value="developers">Developers</option>
					<option value="gaming">Gaming</option>
				</select>
				<button onClick={fetchExcuse}>🔎</button>
				<p>{generateExcuse}</p>
			</section>
		</div>
	);
}

export default App;
