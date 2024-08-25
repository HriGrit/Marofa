import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import { AuthProvider } from "./Context/AuthContext";
import Home from "./pages/Home/Home";
import Loader from "./pages/Loader";
// import MultiStepForm from './components/Register/MultiStepForm.jsx';
const MultiStepForm = lazy(() =>
  import("./components/Register/MultiStepForm.jsx")
);

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));

const AllEmployers = lazy(() => import("./pages/Employer/AllEmployers"));
const SingleEmployer = lazy(() => import("./pages/Employer/SingleEmployer"));
const AllHelpers = lazy(() => import("./pages/Helper/AllHelpers"));
const SingleHelper = lazy(() => import("./pages/Helper/SingleHelper"));
const EmployerDetail = lazy(() => import("./pages/Employer/EmployerDetail"));
const HelperDetail = lazy(() => import("./pages/Helper/HelperDetail"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));

import "./App.css";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ViewProfileEmployer from "./pages/ViewProfile/ViewProfileEmployer.jsx";
import ViewProfileHelper from "./pages/ViewProfile/ViewProfileHelper.jsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<NotFound />} />
            <Route path="/signUp" element={<NotFound />} />
            <Route path="/employers/:employerId" element={<NotFound />} />
            <Route path="/dashboard" element={<NotFound />} />
            <Route path="/employers" element={<NotFound />} />
            <Route path="/helpers/:helperId" element={<NotFound />} />
            <Route path="/employer-details/:id" element={<NotFound />} />
            <Route path="/helper-details/:id" element={<NotFound />} />
            <Route path="/helpers" element={<NotFound />} />
            <Route path="/register" element={<NotFound />} />
            <Route path="/viewProfile-employer/:id" element={<NotFound />} />
            <Route path="/viewProfile-helper/:id" element={<NotFound />} />
            <Route path="/pricing" element={<ComingSoon />} />
            <Route path="/updateProfile" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
