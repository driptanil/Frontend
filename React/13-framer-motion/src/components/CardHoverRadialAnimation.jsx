import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";

export function CardHoverRadialAnimation() {
	let hoverX = useMotionValue(0);
	let hoverY = useMotionValue(0);

	let radialX = useMotionValue(0);
	let radialY = useMotionValue(0);

	function handleMouseMove({ clientX, clientY, currentTarget }) {
		let bounds = currentTarget?.getBoundingClientRect() ?? {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
		};

		/* RETURNS THE DOM (Document Object Model) OF OBJECT WITH KEY '0'
                $0.getBoundingClientRect()
        
                DOMRect {x: 0, y: -253.963623046875, width: 967.4181518554688, height: 1050.7294921875, top: -253.963623046875, …}
            */

		hoverX.set(clientX - bounds.x - bounds.width / 2);
		hoverY.set(clientY - bounds.y - bounds.height / 2);

		// console.log(
		// 	clientX - bounds.x - bounds.width / 2,
		// 	clientY - bounds.y - bounds.height / 2
		// );

		radialX.set(clientX - bounds.x);
		radialY.set(clientY - bounds.y);
	}

	let limitHoverX = useTransform(hoverX, [-240, 0, 240], [30, 0, -30]);
	let limitHoverY = useTransform(hoverY, [-260, 0, 260], [-30, 0, 30]);

	let springX = useSpring(limitHoverX, {
		damping: 15,
		mass: 0.1,
		stiffness: 200,
	});

	let springY = useSpring(limitHoverY, {
		damping: 15,
		mass: 0.1,
		stiffness: 200,
	});

	return (
		<div
			onMouseMove={handleMouseMove}
			onMouseLeave={() => {
				hoverX.set(0);
				hoverY.set(0);
			}}
			className="flex flex-col items-center justify-center"
		>
			<caption>3D + Radial Card Animation</caption>
			<motion.div
				className="relative w-[500px] overflow-hidden rounded-3xl bg-white/10 text-white"
				style={{
					transform: useMotionTemplate`perspective(900px) rotateY(${springX}deg) rotateX(${springY}deg)`,
				}}
			>
				<motion.div
					className="pointer-event-none absolute inset-0 -z-10"
					style={{
						background: useMotionTemplate`radial-gradient(circle at ${radialX}px ${radialY}px, rgba(236, 5, 142, 0.4) 0%, transparent 70%)`,
					}}
				/>
				<motion.div className="flex flex-col items-start justify-center gap-4 p-10 text-lg">
					<p className="text-xl font-semibold tracking-wider text-cyan-300">
						Lifetime membership
					</p>
					<p className="text-3xl font-bold text-white/50 line-through">
						$249
					</p>
					<div className="flex items-center justify-start gap-4">
						<p className="text-5xl font-bold">$149</p>
						<div className="flex flex-col items-center justify-start">
							<p>early bird discount</p>
							<p className="text-white/70">one-time payment</p>
						</div>
					</div>
					<p className="text-left">
						Lifetime access to all current and future premium Build
						UI courses, forever.
					</p>
					<ul className="tickUL gap-2 px-6 text-left text-base leading-8 text-white/80">
						<li>Courses on Framer Motion, Tailwind and Remix</li>
						<li>New videos added weekly</li>
						<li>Refracting videos on React</li>
						<li>Private Discord</li>
						<li>Summaries with code</li>
						<li>Full access to all future Build UI courses</li>
					</ul>
					<button className="perspective1 mx-auto w-1/2 rounded-md bg-cyan-500 px-4 py-2 text-xl font-semibold tracking-wider text-white shadow-sm duration-150 ease-in-out hover:scale-125">
						Buy now
					</button>
				</motion.div>
			</motion.div>
		</div>
	);
}
