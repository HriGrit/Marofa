import React, { useEffect, useState, Suspense, lazy } from "react";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { auth, firestore } from "../../utils/firebase";

const HelperView = lazy(() => import("./HelperView"));
const EmployerView = lazy(() => import("./EmployerView"));
import Loader from "../Loader";
import UnRegistered from "./UnRegistered";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");
  const [applications, setApplications] = useState([]);
  const [applied, setApplied] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName || "");
        setIsAuthenticated(true);

        const fetchUserRole = async () => {
          const uid = user.uid;
          const documentsRef = collection(firestore, "documents");
          const q = query(documentsRef, where("userId", "==", uid));

          try {
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
              setShow(true);
              setLoading(false);
            } else {
              setShow(false);
              const userData = querySnapshot.docs[0].data();
              setRole(userData.role);

              const docRef = querySnapshot.docs[0].ref;
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                setApplications(docSnap.data().applied?.Id || []);
                setApplied(docSnap.data().applications?.Id || []);
                setLoading(false);
              }
            }
          } catch (error) {
            setLoading(false);
            console.error("Error fetching documents:", error);
            toast.error("Error fetching documents");
          }
        };
        fetchUserRole();
      } else {
        setIsAuthenticated(false);
        setRole("");
        setApplications([]);
        setShow(true);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="flex space-x-2 pb-0 pl-4">
        <span className="pt-8 pl-4 text-xl font-semibold text-theme sm:text-3xl">
          Dashboard
        </span>
      </div>
      <div className="w-80 mx-0">
        <hr className="my-2 border-theme border-[2px] rounded sm:mx-auto sm:border-[3px] lg:my-2" />
      </div>

      <Toaster position="top-center" />
      {loading ? (
        <Loader />
      ) : show ? (
        <UnRegistered />
      ) : isAuthenticated ? (
        <div className="my-6 mt-12 mb-4">
          {role === "employer" ? (
            <EmployerView
              name={name}
              applications={applications}
              applied={applied}
            />
          ) : (
            <HelperView
              name={name}
              applications={applications}
              applied={applied}
            />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Dashboard;
