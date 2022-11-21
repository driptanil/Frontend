import { Link } from "react-router-dom";

const linkStyle = {
	margin: "1rem",
	textDecoration: "none",
	color: "#61dafb",
};

export const Navbar = () => {
	return (
		<div>
			<Link to="/" style={linkStyle}>
				Home
			</Link>
			<Link to="/contact" style={linkStyle}>
				Contact
			</Link>
			<Link to="/login" style={linkStyle}>
				Login
			</Link>
		</div>
	);
};
