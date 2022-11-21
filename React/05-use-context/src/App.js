import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// `npm install react-router-dom`
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";

import { Navbar } from "./Navbar";

import { useState, createContext } from "react";
// userContext is a hook

export const AppContext = createContext();

function App() {
	/*
	const TopComponent = () => {
		const [state, setState] = useState();
		return (
			<div>
				<MiddleComponent state={state} />
			</div>
		);
	};

	const MiddleComponent = (state) => {
		return (
			<div>
				<BottomComponent state={state} />
			</div>
		);
	};

	const BottomComponent = (state) => {
		return <div>{state}</div>;
	};
	*/

	const [username, setUsername] = useState("Driptanil");

	return (
		<div className="App">
			{/* provides global data to all tags inside */}
			<AppContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={<Home />}
							// element={<Home username={username} />} // not required
							// useContext() is used
						/>
						<Route path="/profile" element={<Profile />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="*"
							element={<h1>Error 404: (page not found)</h1>}
						/>
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
