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
    <div>
      <Navbar/>
      <Home/> 
      <RegisterPage/>
      <LoginPage/>
      <Cart/>
      <Pizza/>
      <Footer/>
      
    </div>
  )
}

export default App
 