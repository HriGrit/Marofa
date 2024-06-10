import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, firestore } from "./firebase";
import toast from "react-hot-toast";

const firebaseFileUpload = async (file, setImagelink) => {
	if (!localStorage.getItem("uid")) {
		toast.error("You are not logged in");
		return null;
	}
	if (!file) {
		toast.error("No file selected");
		return null;
	}

	const uid = localStorage.getItem("uid");

	const storageRef = ref(storage, `Helper/${uid}/profilePic`);

	uploadBytes(storageRef, file)
		.then((snapshot) => {
			return getDownloadURL(snapshot.ref);
		})
		.then((url) => {
			setImagelink(url);
			const userDocRef = doc(firestore, "users", uid);
			return setDoc(
				userDocRef,
				{ profileImageUrl: url },
				{ merge: true }
			);
		})
		.then(() => {
			toast.success("Image Uploaded Successfully");
		})
		.catch((error) => {
			toast.error("Error uploading image or saving URL");
		});
};

export default firebaseFileUpload;
