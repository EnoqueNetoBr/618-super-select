import { useState } from 'react'
import HeaderLog from './components/header-logado/headerLog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderLog />
    </>
  )
}

export default App
