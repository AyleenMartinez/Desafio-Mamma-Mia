import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './assets/pages/Cart'
import Home from './assets/pages/Home'
import Pizza from './assets/pages/Pizza'
import RegisterPage from './assets/pages/RegisterPage'
import LoginPage from './assets/pages/LoginPage'
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/pizza/001' element={<Pizza/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  )
};

export default App
 