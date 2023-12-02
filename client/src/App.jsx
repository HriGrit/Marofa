import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Navbar />
    </div>
  );
}

export default App;
