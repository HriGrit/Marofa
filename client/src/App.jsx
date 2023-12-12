import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/Home/Home'));
const LoginPage = lazy(() => import('./components/Body/Register/LoginPage'));
import AllEmployers from './pages/Employer/AllEmployers';
import SingleEmployer from './pages/Employer/SingleEmployer';
import AllHelpers from './pages/Helper/AllHelpers';
import SingleHelper from './pages/Helper/SingleHelper';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/employers" element={<AllEmployers />} />
          <Route path="/employers/:employerId" element={<SingleEmployer />} />
          <Route path="/helpers" element={<AllHelpers />} />
          <Route path="/helpers/:helperId" element={<SingleHelper />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
