import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPass from './pages/ResetPass'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/email-verify' element={<EmailVerify/>}></Route>
        <Route path='/reset-password' element={<ResetPass/>}></Route>

      </Routes>
    </div>
  )
}

export default App
