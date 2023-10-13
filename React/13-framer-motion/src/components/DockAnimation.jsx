import { useMotionValue, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function DockAnimation() {
	let mouseX = useMotionValue(Infinity);

	const container = {
		hidden: { opacity: 0, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 4,
				staggerChildren: 0.3,
				duration: 3,
			},
		},
	};

	return (
		<div className="flex w-full flex-col items-center justify-center">
			<caption>Dock Animation</caption>
			<motion.div
				onMouseMove={(event) => {
					mouseX.set(event.pageX);
					// console.log(event.pageX);
				}}
				onMouseLeave={() => {
					mouseX.set(Infinity);
				}}
				variants={container}
				initial="hidden"
				animate="visible"
				className="mx-auto flex h-28 items-end gap-4 rounded-full bg-white/20 px-5 pb-5"
			>
				{[...Array(7).keys()].map((i) => (
					<DockIcon key={i} mouseX={mouseX} />
				))}
			</motion.div>
		</div>
	);
}

function DockIcon({ mouseX }) {
	let reference = useRef(null);
	let distance = useTransform(mouseX, (val) => {
		let bounds = reference.current?.getBoundingClientRect() ?? {
			x: 0,
			width: 0,
		};

		/* RETURNS THE DOM (Document Object Model) OF OBJECT WITH KEY '0'
            $0.getBoundingClientRect()
    
            DOMRect {x: 0, y: -253.963623046875, width: 967.4181518554688, height: 1050.7294921875, top: -253.963623046875, …}
        */

		return val - bounds.x - bounds.width / 2;
	});
	let widthSync = useTransform(distance, [-200, 0, 200], [64, 128, 64]);

	let width = useSpring(widthSync, {
		damping: 15,
		mass: 0.1,
		stiffness: 200,
	});

	const item = {
		hidden: { y: 20, opacity: 0, width: 0 },
		visible: {
			y: 0,
			opacity: 1,
			width: 64,
		},
	};

	return (
		<motion.div
			className="aspect-square rounded-full bg-slate-300/70"
			ref={reference}
			style={{ width }}
			variants={item}
		></motion.div>
	);
}
