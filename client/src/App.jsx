import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';

import AllEmployers from './pages/Employer/All/AllEmployers';
import SingleEmployer from './pages/Employer/Single/SingleEmployer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/employers" element={AllEmployers} />
        <Route path="/employers/:employerId" element={<SingleEmployer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
