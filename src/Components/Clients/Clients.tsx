import Image from 'next/image'
import React from 'react'
import cl1 from '@/Assets/Images/cl1.png'
import cl2 from '@/Assets/Images/cl2.png'
import cl3 from '@/Assets/Images/cl3.png'
import cl4 from '@/Assets/Images/cl4.png'
function Clients() {
    return (
        <div>
            <div className="flex items-center py-4 max-w-full mx-auto justify-around">
                <div className="hover:shadow px-10 rounded-xl h-[100px] flex items-center justify-center">
                    <Image src={cl1} alt="Main Image" width={100} height={40} className='rounded-lg' />
                </div>
                <div className="hover:shadow px-10 rounded-xl h-[100px] flex items-center justify-center">
                    <Image src={cl2} alt="Main Image" width={100} height={40} className='rounded-lg' />
                </div>
                <div className="hover:shadow px-10 rounded-xl h-[100px] flex items-center justify-center">
                    <Image src={cl3} alt="Main Image" width={100} height={40} className='rounded-lg' />
                </div>
                <div className="hover:shadow px-10 rounded-xl h-[100px] flex items-center justify-center">
                    <Image src={cl4} alt="Main Image" width={100} height={40} className='rounded-lg' />
                </div>

            </div>
        </div>
    )
}

export default Clients
