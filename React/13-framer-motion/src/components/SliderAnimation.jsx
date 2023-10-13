import { motion } from "framer-motion";
import { useRef } from "react";

export function SliderAnimation() {
	const constraintsRef = useRef(null);

	return (
		<div className="flexCol">
			<caption>Slider Animation</caption>

			<div className="transparent">
				<section className="position">
					<motion.div className="drag-area" ref={constraintsRef} />
					<motion.div
						drag
						dragConstraints={{
							top: 0,
							left: 0,
							right: 120,
							bottom: 120,
						}}
						className="cursor"
					/>
				</section>
			</div>
		</div>
	);
}
