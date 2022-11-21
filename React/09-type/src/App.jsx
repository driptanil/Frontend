import "./App.css";

import { Person } from "./components/Person";

function App() {
	return (
		<div className="App">
			<Person
				name="Driptanil"
				email="driprecovery@gmail.com"
				age={21}
				isMarried={false}
				skills={["HTML", "CSS", "JavaScript", "React"]}
			/>
		</div>
	);
}

export default App;
