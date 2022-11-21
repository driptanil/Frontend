import "./App.css";
import { Text } from "./Text";
import { useState } from "react";

function App() {
	const [showHide, setShowHide] = useState(false);

	return (
		<div className="App">
			<button
				onClick={() => {
					setShowHide(!showHide);
				}}>
				Show / Hide
			</button>
			{showHide && <Text />}
		</div>
	);
}

export default App;
