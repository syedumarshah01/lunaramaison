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
                        <p>Size Chart</p>
                        <p className='h-0.5 bg-black w-3/4 mb-1'></p>
                        <div className='flex justify-end w-3/4 mb-1 text-center'>
                            <p onClick={() => setIsOpen(!isOpen)} className='w-12 h-fit border border-black p-2 rounded-full cursor-pointer text-sm font-extrabold'>X</p>
                        </div>
                        <img src="/chappal_sizes.webp" className='w-3/4 h-3/4' alt="" />
                        
                    </div>
                </div>: null
            }
        </div>
    )
}