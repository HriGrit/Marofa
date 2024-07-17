import React, { useState, useEffect, useMemo } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

// Custom hook for fetching image URL with caching
const useImageUrl = (id) => {
  return useQuery(
    ["imageUrl", id],
    async () => {
      const imagePath = `images/helper/${id}`;
      const imageRef = ref(storage, imagePath);
      return await getDownloadURL(imageRef);
    },
    { staleTime: 5 * 60 * 1000 } // Cache for 5 minutes
  );
};

// Custom hook for fetching name with caching
const useName = (id) => {
  return useQuery(
    ["name", id],
    async () => {
      const docRef = doc(firestore, "documents", `${id}_helper`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return `${data.personalInfoHelper.firstName} ${data.personalInfoHelper.lastName}`;
      } else {
        throw new Error("Document not found");
      }
    },
    { staleTime: 5 * 60 * 1000 } // Cache for 5 minutes
  );
};

const FirebaseImage = ({ id }) => {
  const { data: imageUrl, error: imageError } = useImageUrl(id);
  const { data: name, error: nameError } = useName(id);

  if (imageError || nameError) {
    return <div>Error loading image</div>;
  }

  return (
    <div className="flex">
      <div className="flex items-center space-x-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Image for ID: ${id}`}
            className="w-24 h-24 rounded-full border-4 border-black"
          />
        ) : (
          <p>Loading...</p>
        )}
        {name ? (
          <p className="text-white">{name}</p>
        ) : (
          <p className="text-white">Helper</p>
        )}
      </div>
      <div className="flex ml-auto items-center">
        <button className="ml-auto px-4 py-2 h-fit bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

const EmployerView = ({ name, applications, applied }) => {
  return (
    <div className="p-4 md:mt-2 py-0">
      <div>
        <h2 className="text-2xl mb-4 px-4 font-bold text-[#14415a]">
          Welcome to Marofa
        </h2>
        <h4 className="text-lg mb-4 px-4 font-medium text-[#14415a]">
          You are an employer. Here you can view the applications
        </h4>
      </div>
      <div className="flex flex-col gap-8 md:gap-32 w-full mx-2 text-center md:flex-row md:justify-items-center">
        <div className="p-3 w-1/2 bg-[#14415a] items-center text-white rounded-lg border shadow-md sm:p-8 sm:min-w-[300px] min-h-[300px]">
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
        <div className="p-3 w-1/2 bg-[#14415a] text-white rounded-lg border shadow-md sm:p-8 sm:min-w-[300px] min-h-[300px]">
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
                      <Link to={`/helpers/${id}_helper`}></Link>
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
