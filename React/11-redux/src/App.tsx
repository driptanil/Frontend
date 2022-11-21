import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Navbar } from "./Navbar";

import { Provider } from "react-redux";
import { store } from "./store";
// `npm install @reduxjs/toolkit react-redux`

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
