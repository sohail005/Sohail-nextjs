import Image from 'next/image'
import React from 'react'
import Aboutus from '../../Assets/Images/Aboutus.png'

function AboutUs() {
    return (
        <div className='mx-auto flex flex-col md:flex-row gap-2 px-15 align-center justify-center'>
            <div className='flex-1 my-12 md:my-10 h-auto md:h rounded-lg flex-col justify-center text-lg md:text-2xl text-gray-500 align-center'>
                <p className='text-[#5E6282] font-bold text-base md:text-md lg:text-l mb-2 px-15 pt-15'>Testimonials</p>
                <h1 className='text-[#000] font-bold text-base md:text-md lg:text-5xl mb-2 px-15'>What people say about Us.</h1>

            </div>
            <div className='flex-1 sm:my-1 md:my-4 rounded-lg flex justify-center items-center text-lg md:text-2xl text-gray-500 
    w-[95%] sm:w-[40%] md:w-[50%]  lg:w-[50%] xl:w-[50%] 2xl:w-[40%] 
    mx-auto transition-all'>
                <Image src={Aboutus} alt="Main Image" width={500} height={400} className='rounded-lg' />

            </div>
        </div>
    )
}

export default AboutUs