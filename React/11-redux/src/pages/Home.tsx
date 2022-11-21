import { useSelector } from "react-redux";
// useSelector hook is used for getting states

export const Home = () => {
	const username = useSelector((state: any) => state.user.value.username)
	return (
		<div>
			<h1>Home Page</h1>
			<h1>{username}</h1>
		</div>
	);
};
