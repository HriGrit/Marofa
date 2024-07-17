import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FirebaseImage = ({ id, showDetails }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ image: false, details: false });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const imagePath = `images/employer/${id}`;
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
        setError((prevError) => ({ ...prevError, image: true }));
      }

      try {
        const docRef = doc(firestore, "documents", `${id}_employer`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetails(docSnap.data().contactDetailsEmployer);
        } else {
          console.log("No such document!");
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

  return (
    <div className="flex items-center space-x-4 min-w-[600px]">
      {loading ? (
        <>
          <Skeleton
            circle={true}
            height={96}
            width={96}
            baseColor="#202020"
            highlightColor="#444"
          />
          {showDetails && (
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
          )}
          <div className="inline-flex items-center">
            <Skeleton
              width={100}
              height={40}
              baseColor="#202020"
              highlightColor="#444"
            />
          </div>
        </>
      ) : error.image || (showDetails && error.details) ? (
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
          {showDetails && details && (
            <div className="flex-1 lg:min-w-[200px] flex flex-col justify-items-center">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <p className="text-2xl font-thin text-white truncate">
                  {details.firstName} {details.lastName}
                </p>
                <p className="text-sm text-white truncate">{details.email}</p>
                <p className="text-sm text-white truncate">
                  {details.mobileNo}
                </p>
              </div>
            </div>
          )}
          {/* detail */}
          <div className="inline-flex items-center">
            <Link
              to={`/employer-details/${id}_employer`}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const FirebaseImageNoDetails = ({ id }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ image: false, details: false });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const imagePath = `images/employer/${id}`;
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
        setError((prevError) => ({ ...prevError, image: true }));
      }

      try {
        const docRef = doc(firestore, "documents", `${id}_employer`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetails(docSnap.data().contactDetailsEmployer);
        } else {
          console.log("No such document!");
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

  return (
    <div className="flex items-center space-x-4 min-w-[600px]">
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
          <div className="inline-flex items-center">
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
          {details && (
            <div className="flex-1 lg:min-w-[200px] flex flex-col justify-items-center">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <p className="text-2xl font-thin text-white truncate">
                  {details.firstName} {details.lastName}
                </p>
              </div>
            </div>
          )}
          <div className="inline-flex items-center">
            <Link
              to={`/employers/${id}_employer`}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const HelperView = ({ name, applications, applied }) => {
  return (
    <div className="p-4 md:mt-2 py-0">
      <div>
        <h2 className="text-2xl mb-4 px-4 font-bold text-[#14415a]">
          Welcome, {name}
        </h2>
      </div>
      <div className="flex flex-col gap-8 md:gap-24 w-full text-center md:flex-row md:justify-items-center">
        <div className="p-3 w-1/2 bg-[#14415a] items-center text-white rounded-lg border shadow-md sm:p-8 sm:min-w-[300px] min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-m md:text-2xl font-bold leading-none text-white">
              Employers Who’ve Contacted You
              <hr />
            </h3>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {applications.length > 0 ? (
                applications.map((id) => (
                  <li key={id} className="py-3 sm:py-4">
                    <FirebaseImage id={id} showDetails={true} />
                  </li>
                ))
              ) : (
                <p className="text-lg text-white">
                  You do not have applicants yet.
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className="p-3 w-1/2 bg-[#14415a] text-white rounded-lg border shadow-md sm:p-8 sm:min-w-[300px] min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-m md:text-2xl font-bold leading-none text-white">
              Employers You’ve Reached Out To
              <hr />
            </h3>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {applied.length > 0 ? (
                applied.map((id) => (
                  <li key={id} className="py-3 sm:py-4">
                    <FirebaseImageNoDetails id={id} />
                  </li>
                ))
              ) : (
                <p className="text-lg text-white">
                  You haven't applied to any candidates yet.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperView;
