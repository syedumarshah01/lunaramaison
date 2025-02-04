import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-32 relative bottom-2' src={assets.lunaramaison} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem Ipsum is a dummy piece of text used by typewriting and other industries mostly for testing purposes.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-234-567-8</li>
                <li>contact@lunaramaison.com</li>

            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
            Copyright 2025 lunaramaison.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
