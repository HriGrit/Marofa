import { getAuth } from "firebase/auth";

const fetchUserDetails = async () => {
	const uid = localStorage.getItem("uid");
	if (!uid) {
		return null;
	}

	const auth = getAuth();

	try {
		const userRecord = await auth.currentUser;
		console.log(userRecord);
		return userRecord;
	} catch (error) {
		console.error("Error fetching user data: ", error);
		return null;
	}
};

export default fetchUserDetails;
