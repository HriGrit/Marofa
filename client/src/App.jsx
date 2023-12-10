import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';

import AllEmployers from './pages/Employer/AllEmployers';
import SingleEmployer from './pages/Employer/SingleEmployer';
import AllHelpers from './pages/Helper/AllHelpers';
import SingleHelper from './pages/Helper/SingleHelper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/employers" element={<AllEmployers />} />
        <Route path="/employers/:employerId" element={<SingleEmployer />} />
        <Route path="/helpers" element={<AllHelpers />} />
        <Route path="/helpers/:helperId" element={<SingleHelper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
