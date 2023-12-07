import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import RegisterHelper from './pages/Register/Helper/RegisterHelper';
import RegisterEmployer from './pages/Register/Employer/RegisterEmployer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/registerHelper" element={RegisterHelper} />
        <Route path="/registerEmployer" element={RegisterEmployer} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
