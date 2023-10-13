import TypingAnimation from "./components/TypingAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Projects() {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 4.5,
				staggerChildren: 0.5,
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

	const { cursorInvisible, cursorDefault } = useContext(AppContext);

	return (
		<>
			<motion.div
				className="pt-30 mt-24 flex flex-row"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<div className="w-2/5 p-20">
					<Link
						to="https://crypto-live-visualizer.onrender.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TypingAnimation
							text="Crypto Live Visualizer App"
							delay={1.2}
							stagger={0.125}
							cursor="project link"
							duration={0}
							styling="text-6xl name"
						/>
					</Link>
					<hr className="mb-2 h-2 w-10 bg-neutral-50"></hr>
					<motion.text variants={item}></motion.text>

					<motion.text
						variants={item}
						className="m-8 block text-4xl font-bold"
					>
						Features:
					</motion.text>
					<ul className="ml-16 list-disc text-lg leading-8">
						<motion.li variants={item}>
							Real-time market data
						</motion.li>
						<motion.li variants={item}>
							Percentage of Profit / Loss of 30 mins, 7 days and 6
							months
						</motion.li>
						<motion.li variants={item}>
							Candle Stick Graph for short term
						</motion.li>
						<motion.li variants={item}>
							Line Graph for long term
						</motion.li>
					</ul>

					<motion.text
						variants={item}
						className="m-8 block text-4xl font-bold"
					>
						Ingredients:
					</motion.text>
					<ul className="ml-16 list-disc text-lg leading-10">
						<motion.li variants={item}>
							<b className="text-xl">BitStamp API</b> for realtime
							crypto market data
						</motion.li>
						<motion.li variants={item}>
							<b className="text-xl">Plotly</b> and{" "}
							<b className="text-xl">Dash</b> library used to
							create candlestick and line graph visualization.
						</motion.li>
						<motion.li variants={item}>
							<b className="text-xl">Render</b> platform is used
							to deploy .
						</motion.li>
					</ul>
				</div>
				<motion.Iframe
					src=""
					// src="https://crypto-live-visualizer.onrender.com/"
					className="preview ml-10 mt-10"
					onMouseEnter={cursorInvisible}
					onMouseLeave={cursorDefault}
				></motion.Iframe>
			</motion.div>
			<motion.div
				className="pt-30 mt-24 flex flex-row"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<div className="p-20">
					<Link
						to="https://social-hot-takes.web.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TypingAnimation
							text="Social Media App"
							delay={1.2}
							stagger={0.2}
							duration={0}
							cursor="project link"
							styling="text-6xl name"
						/>
					</Link>
					<hr className="mb-2 h-2 w-10 bg-neutral-50"></hr>
					<motion.text variants={item}>
						A Hot Takes sharing app made using React JS
					</motion.text>

					<motion.text
						variants={item}
						className="m-8 block text-4xl font-bold"
					>
						Features:
					</motion.text>
					<ul className="ml-16 list-disc text-lg leading-8">
						<motion.li variants={item}>Create New Post</motion.li>
						<motion.li variants={item}>Like / Dislike</motion.li>
						<motion.li variants={item}>Delete Post</motion.li>
					</ul>

					<motion.text
						variants={item}
						className="m-8 block text-4xl font-bold "
					>
						Ingredients:
					</motion.text>
					<ul className="ml-16 list-disc text-lg leading-10">
						<motion.li variants={item}>
							<b className="text-xl">Firebase</b> for Hosting,
							NoSQL Database, Google Authentication.
						</motion.li>
						<motion.li variants={item}>
							<b className="text-xl">TailwindCSS</b> and{" "}
							<b className="text-xl">Framer Motion</b> library to
							make the UI.
						</motion.li>
						<motion.li variants={item}>
							<b className="text-xl">Yup</b> package to add
							restriction to Create Post form.
						</motion.li>
					</ul>
				</div>
				<motion.Iframe
					src=""
					// src="https://social-hot-takes.web.app/"
					className="preview ml-10 mt-10"
					onMouseEnter={cursorInvisible}
					onMouseLeave={cursorDefault}
				></motion.Iframe>
			</motion.div>
		</>
	);
}
