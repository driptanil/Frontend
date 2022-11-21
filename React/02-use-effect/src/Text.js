import React from "react";
import { useState, useEffect } from "react";
// userEffect hook gets trigger by any change in Component Lifecycle

/*
    :: Component LifeCycle ::
        1. Mounting
        2. Updating
        3. Unmounting
*/

export const Text = () => {
	const [text, setText] = useState("");

	useEffect(() => {
		console.log("Component Mounted");

		return () => {
			console.log("Component Unmounted");
		};
	}, []);
	/*
    useEffect Parameters:
        1. `() => {}` -> function while state change
        2. `[]` -> detect state change of a specific component
    */

	return (
		<div>
			<input
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>

			<h1>{text}</h1>
		</div>
	);
};
