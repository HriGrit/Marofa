import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/Home/Home'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
import AllEmployers from './pages/Employer/AllEmployers';
import SingleEmployer from './pages/Employer/SingleEmployer';
import AllHelpers from './pages/Helper/AllHelpers';
import SingleHelper from './pages/Helper/SingleHelper';
import SignUp from './pages/SignUp/SignUp';
import RegisterEmployer from './pages/Register/Employer/RegisterEmployer';
import MultiStepForm from './components/Register/MultiStepForm.jsx';
import Loader from './pages/Loader';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route exact={true} path="/signUp" element={<SignUp />} />
            <Route path="/employers" element={<AllEmployers />} />
            <Route path="/employers/:employerId" element={<SingleEmployer />} />
            <Route path="/helpers" element={<AllHelpers />} />
            <Route path="/helpers/:helperId" element={<SingleHelper />} />
            <Route path="/register/employer" element={<RegisterEmployer />} />
            <Route path='/register' element={<MultiStepForm />} />
            <Route path='*' element={<div>Not Found</div>} />
          </Routes>
        </AuthProvider>
      </Suspense>

    </BrowserRouter>

  );
}

export default App;

