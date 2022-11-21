import { useState } from "react";

// Customs hooks are created for computational logic (not for UI logic)
export const useToggle = (initialVal = false) => {
	const [state, setState] = useState(initialVal);

	const toggle = () => {
		setState((prev) => !prev);
	};

    return [state, toggle];
};
