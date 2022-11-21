import React, { useState } from "react";
import { login, logout } from "../store";
import { useDispatch } from "react-redux";
// useDispatch hooks is used for modifying states

import { useSelector } from "react-redux";
// useSelector hook is used for getting states

export const Login = () => {
	const [newUsername, setNewUsername] = useState<string>("");

	const dispatch = useDispatch();

	const username = useSelector((state: any) => state.user.value.username);

	return (
		<div>
			<h1>Login Page</h1>
			<h1>{username}</h1>
			<input
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setNewUsername(event.target.value);
				}}
			/>
			<button onClick={() => dispatch(login({ username: newUsername }))}>
				Submit
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};
