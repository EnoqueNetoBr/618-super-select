import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaDeCadastro from './pages/cadastro/cadastro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaDeCadastro />
    </>
  )
}

export default App
