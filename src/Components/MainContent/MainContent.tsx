import Image from 'next/image'
import React from 'react'
import Traveller from '../../Assets/Images/Traveller.png'
import play from '../../Assets/Images/play-button.png'

function MainContent() {
    return (
        <div className='mt-10 p-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8'>
            <div className='flex-1 my-10 md:my-20 h-auto md:h rounded-lg flex flex-col justify-center text-lg md:text-2xl text-gray-500'>
                <p className='text-[#DF6951] font-bold text-base md:text-xl lg:text-2xl mb-2'>Best Destinations around the world</p>
                <h1 className='text-black text-3xl md:text-5xl lg:text-6xl font-bold mt-2 md:mt-4'>Travel, enjoy and live a new and full life</h1>
                <p className='text-gray-500 mt-2 md:mt-4 text-sm md:text-base lg:text-sm'>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div className='mt-4 text-sm md:text-base lg:text-sm text-gray-500 flex gap-8 align-center justify-center'>
                    <button className='px-6 text-sm py-2 bg-[#FE9900] text-white rounded-lg whitespace-nowrap w-auto max-w-max'>
                        Find out more
                    </button>
                    <div className='text-gray-500 flex items-center rounded-lg w-fit'>
                        <Image src={play} width={40} height={40} alt="Main Image" />
                        <button className='px-3 text-sendary rounded-lg whitespace-nowrap w-auto max-w-max text-sm md:text-base'>
                            Find out more
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex-1 p-10 md:my-22 h-auto md:h rounded-lg flex text-lg md:text-2xl text-gray-500'>
                <Image src={Traveller} alt="Main Image" width={600} height={400} className='w-full h-full object-cover rounded-lg' />
            </div>
        </div>
    )
}

export default MainContent