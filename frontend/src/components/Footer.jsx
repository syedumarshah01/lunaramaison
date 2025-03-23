import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb w-32 relative bottom-2 left-[-25px]' src={assets.lunaramaison} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
            Where Style Meets Tradition.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/collection'>Collection</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-234-567-8</li>
                <li>lunaramaison@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
            Copyright 2025 lunaramaison.com - All Rights Reserved.
        </p>
      </div>

      {/* <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
    </div>
  )
}

export default Footer
