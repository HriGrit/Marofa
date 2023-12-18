import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast"; // Import toast here

const firebaseFileUpload = async (file, setImagelink) => {
	if (!localStorage.getItem("uid")) {
		toast.error("You are not logged in");
		return null;
	}
	if (!file) {
		toast.error("No file selected");
		return null;
	}
	const storageRef = ref(
		storage,
		`Helper/${localStorage.getItem("uid")}/${uuidv4()}`
	);
	uploadBytes(storageRef, file)
		.then((snapshot) => {
			toast.success("Image uploaded successfully");
			getDownloadURL(snapshot.ref).then((url) => {
				setImagelink(url);
			});
		})
		.catch((error) => {
			console.log(error);
			toast.error("Error uploading image"); // Use toast here
		});
};

export default firebaseFileUpload;
