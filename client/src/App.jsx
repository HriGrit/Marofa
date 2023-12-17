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
import RegisterHelper1 from './pages/Register/Helper/RegisterHelper1';
import RegisterEmployer from './pages/Register/Employer/RegisterEmployer';



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
          <Route path="/employers" element={<AllEmployers />} />
          <Route path="/employers/:employerId" element={<SingleEmployer />} />
          <Route path="/helpers" element={<AllHelpers />} />
          <Route path="/helpers/:helperId" element={<SingleHelper />} />
          <Route path="/register/helper" element={<RegisterHelper1 />} />
          <Route path="/register/employer" element={<RegisterEmployer />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </Suspense>

    </BrowserRouter>

  );
}

export default App;

