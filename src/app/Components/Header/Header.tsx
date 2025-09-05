import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='Header p-4 flex justify-around items-center'>
        <Image src={require('../../../Assets/Images/logo.png')} alt="Vercel Logo" width={100} height={16} />
       <div className='nav'>
        <ul className='flex gap-4'>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Desitnations</li>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Hotels</li>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Flights</li>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Bookings</li>
        </ul>
       </div>
       <div className='nav'>
        <ul className='flex gap-4'>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Login</li>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Hotels</li>
            <li className='text-black hover:text-blue-500 cursor-pointer'>Flights</li>
          {/* https://www.figma.com/design/c9sj92UhDHPIZOQUomMtOV/Travel-Website-Landing-Page--Community-?node-id=0-1&p=f&t=KqSEvZBnqdIYgJAW-0 */}
          {/* https://vercel.com/sohail005s-projects/sohail-nextjs/4J45Tdf7hEPCfPSnGeQzxwobpsRf */}
        </ul>
       </div>
    </div>
  )
}

export default Header
