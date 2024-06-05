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
  // try {
  //   // Check for document in helpers collection
  //   const helperDocRef = doc(collection(firestore, "users/helper", userId));
  //   const helperDocSnapshot = await getDoc(helperDocRef);
  //   console.log("helperDocSnapshot.exists():", helperDocSnapshot);
  //   return helperDocSnapshot.exists();

  //   // Check for document in employers collection
  //   const employerDocRef = doc(collection(firestore, "users/employers", userId));
  //   const employerDocSnapshot = await getDoc(employerDocRef);
    
  //   return employerDocSnapshot.exists();
  // } catch (error) {
  //   console.error("Error checking for user document:", error);
  //   return false;
  // }
}

export default isLoggedInUserDocExists;