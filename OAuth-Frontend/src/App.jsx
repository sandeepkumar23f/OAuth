import { useState } from 'react'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/dashboard/Dashboard'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
