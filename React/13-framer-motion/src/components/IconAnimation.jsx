import { motion } from "framer-motion";

export function IconAnimation() {
	const container = {
		hidden: { opacity: 0, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 3,
				staggerChildren: 0.3,
				duration: 3,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<div className="flexCol">
			<caption>Icon Animation</caption>

			<motion.ul
				className="iconBackground"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				{[...Array(4)].map((index) => (
					<motion.li
						key={index}
						className="iconItem"
						variants={item}
					/>
				))}
			</motion.ul>
		</div>
	);
}
