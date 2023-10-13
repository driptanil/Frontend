import { motion, useScroll } from "framer-motion";
import "../App.css";

export function ScrollIndicator() {
	const { scrollYProgress } = useScroll();

	console.log(scrollYProgress);

	return (
		<div
			className="my-4 flex flex-col items-center justify-center"
			initial="hidden"
			animate="visible"
		>
			<svg
				id="progress"
				width="100"
				height="100"
				viewBox="0 0 100 100"
				style={{
					position: "fixed",
					top: "20px",
					left: "20px",
					transform: "rotate(-90deg)",
					stroke: "rgba(255, 255, 255, 0.5)"
				}}
			>
				<circle
					cx="50"
					cy="50"
					r="30"
					pathLength="1"
					// className="scrollBg"
					style={{
						strokeDashoffset: 0,
						strokeWidth: "15%",
						fill: "none",
						stroke: "rgba(255, 255, 255, 0.5)",
						opacity: 0.3
					}}
				/>
				<motion.circle
					cx="50"
					cy="50"
					r="30"
					pathLength="5"
					// className="scrollIndicator"
					style={{
						pathLength: scrollYProgress,
						strokeDashoffset: 0,
						strokeWidth: "15%",
						stroke: "rgba(255, 255, 255, 0.5)",
						fill: "none"
					}}
				/>
			</svg>
		</div>
	);
}
