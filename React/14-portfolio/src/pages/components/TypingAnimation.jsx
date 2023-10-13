import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function TypingAnimation(props) {
	const { cursorDefault, cursorBig, cursorTextChange } = useContext(AppContext);

	const mouseEnterChange = (a) => e => {
		cursorBig();
		cursorTextChange(a);
	}

	const container = {
		hidden: { opacity: 1, y: -40 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				// delayChildren: 1,
				// staggerChildren: 0.5,
				// duration: 0,
				delayChildren: props.delay,
				staggerChildren: props.stagger,
				duration: props.duration,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: -40 },
		visible: {
			opacity: 1,
			y: 40,
		},
		// transition: {
		// 	duration: 1,
		// },
	};

	const style = props.styling + " inline m-0"


	return (
		<>
			<motion.div
				variants={container}
				initial="hidden"
				animate="visible"
				onMouseEnter={mouseEnterChange(props.cursor)}
				onMouseLeave={cursorDefault}
				className="mr-auto inline w-fit list-none">
				{props.text.split("").map((child) => (
					<motion.li
						className={style}
						variants={item}
						// initial="hidden"
						// animate="visible"
					>
						{child}
					</motion.li>
				))}
			</motion.div>
		</>
	);
}
