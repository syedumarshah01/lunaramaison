import React, { useContext, useState, useEffect } from 'react'

import {Routes, Route, useLocation} from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ShopContext } from './context/ShopContext'


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, {threshold: 0.2})



function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


const App = () => {

  useEffect(() => {
    const onPageLoad = () => {
    const latestCollection = document.querySelector('.scroll-element-latest-collection')
    const bestSellers = document.querySelector('.scroll-element-best-seller')
    observer.observe(latestCollection) 
    observer.observe(bestSellers)     
    }

    if(document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad, false)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <>
      <ScrollToTop/>
      <NavBar />
      <SearchBar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

      </Routes>

      <Footer />

      </>
      
    </div>
  )
}

export default App
