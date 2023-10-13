import { motion, useScroll } from "framer-motion";
import "../../App.css";

export function ScrollIndicator() {
	const { scrollYProgress } = useScroll();

	return (
		<div initial="hidden" animate="visible" className="">
			<svg
				id="progress"
				width="100"
				height="100"
				viewBox="0 0 100 100"
				className=""
			>
				<circle
					cx="50"
					cy="50"
					r="30"
					pathLength="1"
					className="scrollBg"
				/>
				<motion.circle
					cx="50"
					cy="50"
					r="30"
					pathLength="5"
					className="scrollIndicator"
					style={{ pathLength: scrollYProgress }}
				/>
			</svg>
		</div>
	);
}
