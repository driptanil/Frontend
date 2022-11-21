import { useContext } from "react";
import { AppContext } from "../App";

// `props` are not required
export const Home = () => {
	const { username } = useContext(AppContext);

	return (
		<div>
			<h1>This is the Home Page</h1>
			<p>Username: {username}</p>
		</div>
	);
};
