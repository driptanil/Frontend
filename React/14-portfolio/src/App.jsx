import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactCurvedText } from "react-curved-text";

import "./App.css";
import { ScrollIndicator } from "./pages/components/ScrollIndicator";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import { Navbar } from "./Navbar";

export const AppContext = createContext();

function App() {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const [cursorVariant, setCursorVariant] = useState("default");

	const [cursorText, setCursorText] = useState("");

	const variant = {
		invisible: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			backgroundColor: "#00000000",
		},
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			backgroundColor: "#8a51ed",
		},
		big: {
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			height: 150,
			width: 150,
			// backgroundColor: "white",
			backgroundColor: "#ddcbff",
			mixBlendMode: "difference",
		},
	};

	const cursorTextChange = (a) => {
		setCursorText(a);
	};

	const cursorInvisible = () => {
		setCursorVariant("invisible");
	};

	const cursorDefault = () => {
		setCursorVariant("default");
	};

	const cursorBig = () => {
		setCursorVariant("big");
	};

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};
		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	});

	const invisible = "_";
	// const invisible = " ‎";



	return (
		<div className="App">
			<AppContext.Provider
				value={{
					cursorInvisible,
					cursorDefault,
					cursorBig,
					cursorTextChange,
				}}
			>
				<motion.div
					className="cursor"
					variants={variant}
					animate={cursorVariant}
				>
					<motion.div
						rotate
						animate={{ rotate: 360 }}
						transition={{
							ease: "linear",
							duration: 5,
							repeat: Infinity,
						}}
						className="font-mono"
					>
						<ReactCurvedText
							width="150"
							height="150"
							cx="75"
							cy="75"
							rx="65"
							ry="65"
							startOffset="0"
							reversed={false}
							// text={invisible.repeat(54)}
							text={invisible.repeat(26 - cursorText.length) + cursorText + invisible.repeat(27 - cursorText.length) + cursorText}
							textProps={{ style: { fontSize: "14" } }}
							textPathProps={null}
							tspanProps={null}
							ellipseProps={null}
							svgProps={null}
						/>
					</motion.div>
				</motion.div>

				<ScrollIndicator />

				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
