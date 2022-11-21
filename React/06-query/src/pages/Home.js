import { useQuery } from "@tanstack/react-query";
// useQuery is a hook

import Axios from "axios";

export const Home = () => {
	const { data: catFact, isLoading, isError, refetch } = useQuery(["cat"], () => {
		// useQuery(key, fetch())
		return Axios.get("https://catfact.ninja/fact").then((res) => res.data);

		/*
		return Axios.get("https://catfact.ninja/factuals").then(
			(res) => res.data
		); // to check `isError` works
        */
	});

	// `isError` becomes true is there is an error
	if (isError) {
		return <h1>Sorry, there was an Error ...</h1>;
	}

	// `isLoading` becomes true if the data is processing
	// and false if the data has been processed
	if (isLoading) {
		return <h1>Loading ...</h1>;
	}

	return (
		<div>
			<p>This is the Home Page</p>
			<h1>{catFact?.fact}</h1>
			{/* without `?` reloading breaks the website
            if checks if data is null
            */}

			<button onClick={refetch}>👀 Update</button>
			{/* if any new data gets added to the backend,
            `refetch` is used to update the frontend
             */}
		</div>
	);
};
