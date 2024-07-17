import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { firestore } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { storage } from "../../utils/firebase";
import { Link } from "react-router-dom";

const FirebaseImage = ({ id }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const imagePath = `images/helper/${id}`;
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
        setError(error);
      }
    };

    const fetchName = async () => {
      try {
        const docRef = doc(firestore, "documents", `${id}_helper`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data); // Logging the entire document data to check its structure
          const combinedName =
            data.professionalInfoHelper.first_name +
            " " +
            data.professionalInfoHelper.last_name;
          setName(combinedName);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        setError(error);
      }
    };

    fetchImageUrl();
    fetchName();
  }, [id]);

  if (error) {
    return <div>Error loading image</div>;
  }

  return (
    <div className="flex items-center space-x-4">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Image for ID: ${id}`}
          className="w-16 h-16 rounded-full"
        />
      ) : (
        <p>Loading...</p>
      )}
      {name && <p className="text-white">{name}</p>}
    </div>
  );
};

const EmployerView = ({ name, applications, applied }) => {
  return (
    <div className="p-4 md:mt-2 py-0">
      <div>
        <h2 className="text-2xl mb-4 px-4 font-bold text-[#14415a]">
          Welcome, {name}
        </h2>
      </div>
      <div className="flex flex-col gap-8 md:gap-32 w-full mx-2 text-center md:flex-row md:justify-items-center">
        <div className="p-3 max-w-3xl bg-[#14415a] items-center text-white rounded-lg border shadow-md sm:p-8 sm:min-w-[300px] min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-white">
              Applicants
            </h3>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {applications.length > 0 ? (
                applications.map((id) => (
                  <li key={id} className="py-3 sm:py-4">
                    <Link to={`/helper-details/${id}_helper`}>
                      <FirebaseImage id={id} />
                    </Link>
                    <div className="mt-2">
                      <Link to={`/helper-details/${id}_helper`}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-lg text-white">
                  You have not applied for any applications yet.
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className="p-3 max-w-3xl bg-[#14415a] text-white rounded-lg border shadow-md sm:p-8 sm:min-w-[300px] min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-white">
              Your Applications
            </h3>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {applied.length > 0 ? (
                applied.map((id) => (
                  <li key={id} className="py-3 sm:py-4">
                    <Link to={`/helpers/${id}_helper`}>
                      <FirebaseImage id={id} />
                    </Link>
                    <div className="mt-2">
                      <Link to={`/helpers/${id}_helper`}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-lg text-white">
                  You have not applied for any applications yet.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerView;
