import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
