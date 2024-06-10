import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { AuthProvider } from './Context/AuthContext';
import Home from './pages/Home/Home';
import Loader from './pages/Loader';
// import MultiStepForm from './components/Register/MultiStepForm.jsx';
const MultiStepForm = lazy(() => import('./components/Register/MultiStepForm.jsx'));

const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));

const AllEmployers = lazy(() => import('./pages/Employer/AllEmployers'));
const SingleEmployer = lazy(() => import('./pages/Employer/SingleEmployer'));
const AllHelpers = lazy(() => import('./pages/Helper/AllHelpers'));
const SingleHelper = lazy(() => import('./pages/Helper/SingleHelper'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

import './App.css';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/employers/:employerId" element={<SingleEmployer />} />
            <Route path="/employers" element={<AllEmployers />} />
            <Route path="/helpers/:helperId" element={<SingleHelper />} />
            <Route path="/helpers" element={<AllHelpers />} />
            <Route path='/register' element={<MultiStepForm />} />
            <Route path="/pricing" element={<ComingSoon />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;