import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { AuthProvider } from './Context/AuthContext';
import Home from './pages/Home/Home';
import Loader from './pages/Loader';
import MultiStepForm from './components/Register/MultiStepForm.jsx';

const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));

const AllEmployers = lazy(() => import('./pages/Employer/AllEmployers'));
const SingleEmployer = lazy(() => import('./pages/Employer/SingleEmployer'));
const AllHelpers = lazy(() => import('./pages/Helper/AllHelpers'));
const SingleHelper = lazy(() => import('./pages/Helper/SingleHelper'));

import './App.css';

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
            <Route path='*' element={<div>Not Found</div>} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// const Home = lazy(() => import('./pages/Home/Home'));
// const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
// import AllEmployers from './pages/Employer/AllEmployers';
// import SingleEmployer from './pages/Employer/SingleEmployer';
// import AllHelpers from './pages/Helper/AllHelpers';
// import SingleHelper from './pages/Helper/SingleHelper';
// import SignUp from './pages/SignUp/SignUp';
// import RegisterEmployer from './pages/Register/Employer/RegisterEmployer';
// import Loader from './pages/Loader';

// import { AuthProvider } from './Context/AuthContext';

// function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={<Loader />}>
//         <AuthProvider>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/signIn' element={<SignIn />} />
//             <Route exact={true} path="/signUp" element={<SignUp />} />
//             <Route path="/employers" element={<AllEmployers />} />
//             <Route path="/employers/:employerId" element={<SingleEmployer />} />
//             <Route path="/helpers" element={<AllHelpers />} />
//             <Route path="/helpers/:helperId" element={<SingleHelper />} />
//             <Route path="/register/employer" element={<RegisterEmployer />} />
//             <Route path='/register' element={<MultiStepForm />} />
//             <Route path='*' element={<div>Not Found</div>} />
//           </Routes>
//         </AuthProvider>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;

