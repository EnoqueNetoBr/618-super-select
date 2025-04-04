import { useState } from 'react';
import './sass/custom.css';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
