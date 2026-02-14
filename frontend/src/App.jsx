import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import PrivacyPolicy from './pages/PrivacyPolicy'


import FloatingCart from './components/FloatingCart'
import ScrollToTop from './components/ScrollToTop'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app w-full'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home setShowLogin={setShowLogin} />} />
          <Route path='/cart' element={<Cart setShowLogin={setShowLogin} />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />


          <Route path='/verify' element={<Verify />} />
          <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
        <Footer />
      </div>
      <FloatingCart />
      <ScrollToTop />
    </>

  )
}

export default App
