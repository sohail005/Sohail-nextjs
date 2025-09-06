import Image from 'next/image'
import React from 'react'
import logo from "../../../Assets/Images/logo.png";
function Header() {
  return (
    <div className='Header p-4 flex justify-around items-center'>
        <Image src={logo} alt="Vercel Logo" width={100} height={16} />
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
            <button className='text-black hover:text-blue-500 cursor-pointer border border-black hover:border-blue-500 cursor-pointer rounded px-2'>Sign up</button>
          {/* https://www.figma.com/design/c9sj92UhDHPIZOQUomMtOV/Travel-Website-Landing-Page--Community-?node-id=0-1&p=f&t=KqSEvZBnqdIYgJAW-0 */}
          {/* https://vercel.com/sohail005s-projects/sohail-nextjs/4J45Tdf7hEPCfPSnGeQzxwobpsRf */}
        </ul>
       </div>
    </div>
  )
}

export default Header
