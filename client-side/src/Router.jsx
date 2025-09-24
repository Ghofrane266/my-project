import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import Menu from './pages/Menu'
import Profil from './pages/Profil'
import App from './App'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
function Router() {
  return (
    <BrowserRouter>
      
     <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<LandingPage />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profil" element={<Profil />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>




    </BrowserRouter>
  )
}

export default Router