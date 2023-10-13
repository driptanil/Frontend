import { useState } from "react";
import { motion } from "framer-motion";

export function ToggleAnimation() {
	const [isOn, setIsOn] = useState(false);

	return (
		<div className="mx-4 flex flex-col items-center justify-center">
			<div
				className="flex h-36 w-56 justify-start rounded-full bg-white/20 p-4"
				data-isOn={isOn}
				onClick={() => setIsOn(!isOn)}
			>
				<motion.div className="handle" layout />
			</div>
		</div>
	);
}
