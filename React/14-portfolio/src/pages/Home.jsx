import { motion } from "framer-motion";
// import profilePic from "../ProfilePic.png";
import TypingAnimation from "./components/TypingAnimation";

export default function Home() {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 2.5,
				duration: 1,
			},
		},
	};

	const item = {
		hidden: { y: 40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
		transition: {
			duration: 1,
		},
	};

	return (
		<motion.div
			className="z-20 ml-20 mt-40 flex list-none flex-row text-xl"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<div className="flex flex-col">
				<motion.li variants={item}>
					<p>Hi, I'm </p>
				</motion.li>
				<TypingAnimation
					text="Drip"
					delay={1.5}
					stagger={0.4}
					duration={0}
					cursor="say Hello"
					styling="text-8xl name"
				/>
				<hr className="mb-2 h-2 w-10 bg-neutral-50"></hr>
				<TypingAnimation
					text="Driptanil Datta"
					cursor="say Hello"
					delay={3.5}
					stagger={0.1}
					duration={0}
					styling="text-4xl font-semibold opacity-20"
				/>
				<motion.li variants={item}>
					<p className="w-1/3">
						I am a 2nd year student, pursuing my BTech in Computer Science &
						Engineering from IIT Narkelbagan
					</p>
				</motion.li>
			</div>
			{/* <img src={profilePic} alt="Profile Pic" className="mt-20 w-4/12" /> */}
		</motion.div>
	);
}
