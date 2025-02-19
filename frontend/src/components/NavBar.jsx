import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {NavLink, Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'


const NavBar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, setToken, navigate, token, setCartItems } = useContext(ShopContext)


  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  return (
    <div className='relative flex items-center justify-between py-0 sm:py-5 font-medium h-40 z-50'>
      <Link to='/'>
      <img src={assets.lunaramaison} alt="" className='w-32 h-32 pt-4 absolute -left-8 top-0' />
      </Link>
     
      {/* <h1>LUNARA MAISON</h1> */}

      <ul className='hidden sm:flex gap-5 text-sm  bg-gradient-to-r from-neutral-50 rounded-tl-lg px-2 lg:px-20 pt-4 pb-2'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p className='hover:scale-125'>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p className='hover:scale-125'>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p className='hover:scale-125'>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p className='hover:scale-125'>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

        </NavLink>

      </ul>


      <div className='flex items-center gap-6 bg-gradient-to-l from-neutral-50 pr-3 pl-10 pt-3 pb-3 rounded-br-lg'>

      {/* <svg className='w-6 cursor-pointer' onClick={() => setShowSearch(true)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
      </svg> */}

        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="" className='w-6 cursor-pointer'/>
        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/>
          {/* Dropdown Menu */}
          {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="" className='w-6 min-w-5'/>
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <NavLink className='py-2 pl-6 border' to='/' onClick={() => setVisible(false)}>
            HOME
          </NavLink>
          <NavLink className='py-2 pl-6 border' to='/collection' onClick={() => setVisible(false)}>
            COLLECTION
          </NavLink>
          <NavLink className='py-2 pl-6 border' to='/about' onClick={() => setVisible(false)}>
            ABOUT
          </NavLink>
          <NavLink className='py-2 pl-6 border' to='/contact' onClick={() => setVisible(false)}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
