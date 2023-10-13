import "./App.css";
import { motion } from "framer-motion";

import { ScrollIndicator } from "./components/ScrollIndicator";
import { KeyframeAnimation } from "./components/KeyframeAnimation";
import { GestureAnimation } from "./components/GestureAnimation";
import { SliderAnimation } from "./components/SliderAnimation";
import { ToggleAnimation } from "./components/ToggleAnimation";
import { ScaleAnimation } from "./components/ScaleAnimation";
import { IconAnimation } from "./components/IconAnimation";
import { DockAnimation } from "./components/DockAnimation";
import { CardRadialAnimation } from "./components/CardRadialAnimation";
import { CardHoverAnimation } from "./components/CardHoverAnimation";
import { CardHoverRadialAnimation } from "./components/CardHoverRadialAnimation";
import CardCarousel from "./components/CardCarousel";
import HoverDropdown from "./components/HoverDropdown";

function App() {
	const container = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.4,
				duration: 0.8
			}
		}
	};

	const item = {
		hidden: { y: 40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 2
		}
	};

	return (
		<>
			<ScrollIndicator />,
			<motion.div
				className="App"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				{[
					<CardCarousel />,
					<HoverDropdown />,
					<KeyframeAnimation />,
					<GestureAnimation />,
					<SliderAnimation />,
					<ToggleAnimation />,
					<ScaleAnimation />,
					<IconAnimation />,
					<DockAnimation />,
					<CardRadialAnimation />,
					<CardHoverAnimation />,
					<CardHoverRadialAnimation />
				].map((child) => (
					<motion.li variants={item}>{child}</motion.li>
				))}
				{/* 
			<ScrollIndicator />
			
			<KeyframeAnimation />

			<GestureAnimation />
			
			<SliderAnimation />
			
			<ToggleAnimation />
			
			<ScaleAnimation />
			
		<IconAnimation /> */}
			</motion.div>
		</>
	);
}

export default App;
