import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
