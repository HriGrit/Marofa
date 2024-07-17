import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
async function isLoggedInUserDocExists(firestore, currentUser) {
  const [user, setUser] = useState(null);
  if (!currentUser || !currentUser.uid) {
    console.error("Error: User ID not found.");
    return false;
  }

  const userId = currentUser.uid;

  const documentsRef = collection(firestore, 'documents');
  const q = query(documentsRef, where('userId', '==', userId));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
      const helpersList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
      }));
      setUser(helpersList);
  } else {
      setUser([]);
  }
}

export default isLoggedInUserDocExists;