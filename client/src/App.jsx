<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
=======
import './App.css';
import Navbar from './components/navbar';
>>>>>>> cadc333 (app colors)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
