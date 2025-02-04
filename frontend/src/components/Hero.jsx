import React from 'react'
import { assets } from '../assets/assets'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semiold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero Right Side */}
        <Carousel autoPlay='true' interval={6000} className='w-full sm:w-1/2'>
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        </Carousel>
        
      
    </div>
  )
}

export default Hero
