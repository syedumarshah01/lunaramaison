import React, { useState } from 'react'


export const ImageModal = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center cursor-pointer w-fit'>
                
                <p>Size Guide</p>
                <img src="/size_guide.png" className='w-12 h-12' alt="" />
            </div>
            
            {
                isOpen ? <div className='fixed inset-0 bg-opacity-20 z-50'>
                    <div className='p-4 bg-white w-screen h-screen flex flex-col items-center justify-center'>
                        <div className='flex justify-center w-full sm:w-1/2 mb-1 text-center'>
                            <p onClick={() => setIsOpen(!isOpen)} className='w-8 h-8 border border-black py-2 rounded-full cursor-pointer text-xs font-extrabold hover:bg-black hover:text-white'>X</p>
                        </div>
                        <img src="/chappal_sizes.webp" className='w-full sm:w-1/2 h-3/4' alt="" />
                        
                    </div>
                </div>: null
            }
        </div>
    )
}