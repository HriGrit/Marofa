import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../utils/firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import tick from "../../assets/Tick.svg";
import cross from "../../assets/Cross.png";

const FirebaseImage = ({ id, showDetails, onRemove }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ image: false, details: false });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const imagePath = `images/helper/${id}`;
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
        setError((prevError) => ({ ...prevError, image: true }));
      }

      try {
        const docRef = doc(firestore, "documents", `${id}_helper`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const combinedName =
            data.personalInfoHelper.firstName +
            " " +
            data.personalInfoHelper.lastName;
          setName(combinedName);
        } else {
          setError((prevError) => ({ ...prevError, details: true }));
        }
      } catch (error) {
        console.error("Error fetching details:", error);
        setError((prevError) => ({ ...prevError, details: true }));
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleTickClick = async () => {
    try {
      const userDocRef = doc(firestore, "documents", `${id}_employer`);
      await updateDoc(userDocRef, {
        verified: arrayUnion(id)
      });
      alert("User verified successfully");
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  const handleCrossClick = async () => {
    try {
      onRemove(id);
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="flex items-center space-x-4 min-w-[300px] sm:min-w-[400px] md:min-w-[600px]">
      {loading ? (
        <>
          <Skeleton
            circle={true}
            height={96}
            width={96}
            baseColor="#202020"
            highlightColor="#444"
          />
          <div className="flex-1 lg:min-w-[200px] flex flex-col justify-items-center">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <Skeleton
                width={120}
                height={28}
                baseColor="#202020"
                highlightColor="#444"
              />
            </div>
          </div>
          <div className="inline-flex items-center mr-4">
            <Skeleton
              width={100}
              height={40}
              baseColor="#202020"
              highlightColor="#444"
            />
          </div>
        </>
      ) : error.image || error.details ? (
        <div className="w-16 h-16 flex items-center justify-center">
          <p>Error loading content</p>
        </div>
      ) : (
        <>
          <img
            src={imageUrl}
            alt={`Image for ID: ${id}`}
            className="w-24 h-24 border-black border-4 rounded-full"
          />
          {name && (
            <div className="flex-1 flex flex-col justify-items-center">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <p className="text-2xl font-thin text-white truncate">{name}</p>
              </div>
            </div>
          )}
          <div className="inline-flex items-center">
            <Link
              to={`/helper-details/${id}_helper`}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </Link>
            {/* <div className="flex flex-col mdnav:flex-row"> */}
              <img
                src={tick}
                alt="tick"
                className="w-10 h-10 cursor-pointer"
                onClick={handleTickClick}
              />
              <img
                src={cross}
                alt="cross"
                className="w-10 h-10 cursor-pointer"
                onClick={handleCrossClick}
              />
            {/* </div> */}
          </div>
        </>
      )}
    </div>
  );
};

const FirebaseImage2 = ({ id, onRemove }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ image: false, details: false });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const imagePath = `images/helper/${id}`;
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
        setError((prevError) => ({ ...prevError, image: true }));
      }

      try {
        const docRef = doc(firestore, "documents", `${id}_helper`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const combinedName =
            data.personalInfoHelper.firstName +
            " " +
            data.personalInfoHelper.lastName;
          setName(combinedName);
        } else {
          setError((prevError) => ({ ...prevError, details: true }));
        }
      } catch (error) {
        console.error("Error fetching details:", error);
        setError((prevError) => ({ ...prevError, details: true }));
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleCrossClick = async () => {
    try {
      onRemove(id);
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="flex items-center space-x-4 min-w-[300px] sm:min-w-[400px] md:min-w-[600px]">
      {loading ? (
        <>
          <Skeleton
            circle={true}
            height={96}
            width={96}
            baseColor="#202020"
            highlightColor="#444"
          />
          <div className="flex-1 lg:min-w-[200px] flex flex-col justify-items-center">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <Skeleton
                width={120}
                height={28}
                baseColor="#202020"
                highlightColor="#444"
              />
            </div>
          </div>
          <div className="inline-flex items-center mr-4">
            <Skeleton
              width={100}
              height={40}
              baseColor="#202020"
              highlightColor="#444"
            />
          </div>
        </>
      ) : error.image || error.details ? (
        <div className="w-16 h-16 flex items-center justify-center">
          <p>Error loading content</p>
        </div>
      ) : (
        <>
          <img
            src={imageUrl}
            alt={`Image for ID: ${id}`}
            className="w-24 h-24 border-black border-4 rounded-full"
          />
          {name && (
            <div className="flex-1 lg:min-w-[200px] flex flex-col justify-items-center">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <p className="text-2xl font-thin text-white truncate">{name}</p>
              </div>
            </div>
          )}
          <div className="inline-flex items-center">
            <Link
              to={`/helpers/${id}_helper`}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </Link>
            <div className="inline-flex items-center">
              <img
                src={cross}
                alt="cross"
                className="w-10 h-10 mr-2 cursor-pointer"
                onClick={handleCrossClick}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const EmployerView = ({ name, applications, applied }) => {
  const [applicationsState, setApplicationsState] = useState(applications);
  const [appliedState, setAppliedState] = useState(applied);

  const handleRemoveApplication = (id) => {
    setApplicationsState((prev) => prev.filter((appId) => appId !== id));
  };

  const handleRemoveApplied = (id) => {
    setAppliedState((prev) => prev.filter((appId) => appId !== id));
  };
  
  return (
    <div className="p-4 py-0">
      <div>
        <h2 className="text-2xl mb-4 px-4 font-bold text-[#14415a]">
          Welcome to Marofa
        </h2>
        <h4 className="text-lg mb-4 px-4 font-medium text-[#14415a]">
          You are an employer. Here you can view the applications
        </h4>
      </div>
      <div className="flex flex-col gap-8 w-full mx-2 text-center md:flex-row md:justify-items-center md:gap-32">
        <div className="p-3 w-full bg-[#14415a] items-center text-white rounded-lg border shadow-md sm:p-8 md:w-1/2 min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-m md:text-2xl font-bold leading-none text-white">
              Helpers Who've Contacted You
              <hr />
            </h3>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {applications.length > 0 ? (
                applications.map((id) => (
                  <li key={id} className="py-3 sm:py-4">
                    <Link to={`/helper-details/${id}_helper`}>
                      <FirebaseImage id={id} showDetails={true} onRemove={handleRemoveApplication} />
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
          <div className="p-3 w-full bg-[#14415a] text-white rounded-lg border shadow-md sm:p-8 md:w-1/2 min-h-[300px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-m md:text-2xl font-bold leading-none text-white">
                Helpers You've Reached Out To
                <hr />
              </h3>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                {applied.length > 0 ? (
                  applied.map((id) => (
                    <li key={id} className="py-3 sm:py-4">
                      <Link to={`/helpers/${id}_helper`}>
                        <FirebaseImage2 id={id} onRemove={handleRemoveApplied} />
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
        </div>
      </div>
  );
}

export default EmployerView;