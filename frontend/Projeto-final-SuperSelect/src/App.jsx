import { useState } from 'react';
import './sass/custom.css'; /* Bootstrap Import */
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from './pages/dashboard/dashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Hello, world! <h1/> 
    </>
  )
}

export default App
