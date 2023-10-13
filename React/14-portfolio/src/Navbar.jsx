import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { useContext } from "react";

export const Navbar = () => {
	const { cursorDefault, cursorBig, cursorTextChange } = useContext(AppContext);

	const mouseEnterChange = (a) => e => {
		cursorBig();
		cursorTextChange(a);
	}
	
	return (
		<div className="fixed top-0 flex w-1/2 items-center justify-around backdrop-blur-sm p-10 rounded-full">
			<Link
				className=""
				to="/"
				onMouseEnter={mouseEnterChange("home")}
				onMouseLeave={cursorDefault}
			>
				Home
			</Link>
			<Link className="" to="/about" 
				onMouseEnter={mouseEnterChange("about")}
				onMouseLeave={cursorDefault}>
				About
			</Link>
			<Link className="" to="/projects" 
				onMouseEnter={mouseEnterChange("projects")}
				onMouseLeave={cursorDefault}>
				Projects
			</Link>
			<Link className="" to="/skills" 
				onMouseEnter={mouseEnterChange("skills")}
				onMouseLeave={cursorDefault}>
				Skills
			</Link>
			<Link className="" to="/contact"
				onMouseEnter={mouseEnterChange('contact')}
				onMouseLeave={cursorDefault}>
				Contact
			</Link>
		</div>
	);
};
