import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Cart from './components/Cart'
// import Home from './components/Home'
import Pizza from './components/Pizza'
// import RegisterPage from './components/RegisterPage'
// import LoginPage from './components/LoginPage'
import './App.css'

function App() {
  

  return (
    <div>
      <Navbar/>
      {/* <Home/> 
      <RegisterPage/>
      <LoginPage/>
      <Cart/> */}
      <Pizza/>
      <Footer/>
      
    </div>
  )
}

export default App
 