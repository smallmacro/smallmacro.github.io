import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'


function App() {
  
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    
  )
}

export default App
