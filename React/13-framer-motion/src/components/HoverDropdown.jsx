import React from "react";

import * as Ariakit from "@ariakit/react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const HoverDropdown = () => {
	const menuConfig = {
		closed: {
			scale: 0,
			transition: {
				delay: 0.15
			}
		},
		open: {
			scale: 1,
			transition: {
				type: "spring",
				duration: 0.4,
				delayChildren: 0.2,
				staggerChildren: 0.05
			}
		}
	};

	const [open, setOpen] = React.useState(false);

	const menu = Ariakit.useMenuStore({ open, setOpen });
	const currentPlacement = menu.useState("currentPlacement");
	const mounted = menu.useState("mounted");

	return (
		<MotionConfig reducedMotion="user">
			<Ariakit.MenuButton
				store={menu}
				className="rounded-xl bg-white/20 px-10 py-2 text-lg"
			>
				Options
			</Ariakit.MenuButton>
			<AnimatePresence>
				{mounted && (
					<Ariakit.Menu
						store={menu}
						alwaysVisible
						className="rounded-xl bg-white/20 px-10 py-2 text-lg"
						// We'll use this data attribute to style the transform-origin
						// property based on the menu's placement. See style.css.
						data-placement={currentPlacement}
						render={
							<motion.div
								initial="closed"
								exit="closed"
								animate={open ? "open" : "closed"}
								variants={menuConfig}
							/>
						}
					>
						<Ariakit.MenuArrow className="menu-arrow" />
						{[1, 2, 3, 4].map((num) => {
							return (
								<Ariakit.MenuItem
									className="menu-item"
									render={
										<motion.div
											open={open}
											setOpen={setOpen}
											animate={open ? "open" : "closed"}
											initial="closed"
											exit="closed"
											variants={menu}
										>
											Option {num}
										</motion.div>
									}
								/>
							);
						})}
					</Ariakit.Menu>
				)}
			</AnimatePresence>
		</MotionConfig>
	);
};

export default HoverDropdown;
