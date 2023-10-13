import { motion } from "framer-motion";

export function GestureAnimation() {
	return (
		<motion.div className="flexCol">
			<caption>Gesture Animations</caption>

			<motion.button
				className="box"
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}></motion.button>
		</motion.div>
	);
}
