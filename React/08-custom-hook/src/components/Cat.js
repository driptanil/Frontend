import { useQuery } from "@tanstack/react-query";

import Axios from "axios";

export const Cat = () => {
	const { data: catData } = useQuery(["cat"], async () => {
		return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
	});
};
