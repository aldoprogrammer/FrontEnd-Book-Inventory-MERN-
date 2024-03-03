import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import MyFooter from './components/MyFooter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter />
    </>
  )
}

export default App
