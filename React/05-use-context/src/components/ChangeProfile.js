import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

// `props` are not required
export const ChangeProfile = () => {
	const { setUsername, username } = useContext(AppContext);

	const [newUsername, setNewUsername] = useState(username);

	return (
		<div>
			<input
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					setUsername(newUsername);
				}}>
				✔️
			</button>
		</div>
	);
};
