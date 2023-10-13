import React from "react";
import { motion } from "framer-motion";

const CardCarousel = () => {
	const [number, setNumber] = React.useState(0);

	const carousel = {
		prev: {
			transform: "perspective(900px) rotateY(40deg) rotateX(0deg)",
			width: "100px",
			transition: {
				type: "spring",
				duration: 0.6
			}
		},
		current: {
			transform: "perspective(900px) rotateY(0deg) rotateX(0deg)",
			width: "200px",
			transition: {
				type: "spring",
				duration: 0.2
			}
		},
		next: {
			transform: "perspective(900px) rotateY(-40deg) rotateX(0deg)",
			width: "100px",
			transition: {
				type: "spring",
				duration: 0.6
			}
		},
		hidden: {
			display: "none"
		}
	};

	return (
		<div className="flex w-full flex-col items-center justify-center">
			<motion.div className="flex gap-2">
				{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
					<motion.div
						className="h-[200px] w-[150px] rounded-2xl bg-white/10"
						key={i}
						variants={carousel}
						initial="next"
						animate={
							i === number - 1
								? "prev"
								: i === number
								? "current"
								: i === number + 1
								? "next"
								: "hidden"
						}
					/>
				))}
			</motion.div>
			<div className="flex items-center justify-center">
				<button
					className="rounded-xl bg-white/10 p-4 text-4xl"
					onClick={() => {
						setNumber(number - 1);
					}}
				>
					{" "}
					-{" "}
				</button>
				<p className="p-4">{number}</p>
				<button
					className="rounded-xl bg-white/10 p-4 text-4xl"
					onClick={() => {
						setNumber(number + 1);
					}}
				>
					{" "}
					+{" "}
				</button>
			</div>
		</div>
	);
};

export default CardCarousel;
