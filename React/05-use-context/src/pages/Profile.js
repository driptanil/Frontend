import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

// `props` are not required
export const Profile = () => {
	const { username } = useContext(AppContext);
	return (
		<div>
			<p>{username} Profile Page</p>
			{/* <ChangeProfile
				username={props.username}
				setUsername={props.setUsername}
			/> */}
			<ChangeProfile />
		</div>
	);
};
