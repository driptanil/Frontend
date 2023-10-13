import { motion } from "framer-motion";

export function KeyframeAnimation() {

	return (
		<motion.div
			className="flexCol">
			<caption>Keyframe Animation</caption>

			<motion.div
				className="box"
				animate={{
					scale: [0.7, 1, 1, 0.7, 0.7],
					rotate: [0, 0, 270, 270, 0],
					borderRadius: ["10%", "10%", "50%", "50%", "10%"],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatDelay: 1,
				}}></motion.div>
		</motion.div>
	);
}
