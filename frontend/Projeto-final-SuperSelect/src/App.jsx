import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransparentBox from './pages/login/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TransparentBox />
    </>
  )
}

export default App
