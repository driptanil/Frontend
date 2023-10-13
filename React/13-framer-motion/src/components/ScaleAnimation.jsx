import { motion } from "framer-motion";
import { useState } from "react";

export function ScaleAnimation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flexCol">
			<caption>Scale Animation</caption>

			<motion.div
				layout
				data-isOpen={isOpen}
				initial={{ borderRadius: 50 }}
				className="openBorder"
				onClick={() => setIsOpen(!isOpen)}
			>
				{/* <motion.div layout className="openCenter" /> */}
			</motion.div>
		</div>
	);
}
