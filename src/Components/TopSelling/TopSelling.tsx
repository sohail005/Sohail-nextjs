import React from 'react'
import LocationCard from './LocationCard'
import Rome from '@/Assets/Images/Rome.png'
import London from '@/Assets/Images/London.png'
import Europe from '@/Assets/Images/Europe.png'
function TopSelling() {
    const locations = [
        {
            title: "Rome, Italty",
            price: "$5,42k",
            duration: "10 Days Trip",
            image: Rome,
        },
        {
            title: "Best Flights",
            price: "$4.2k",
            duration: "12 Days Trip",
            image: London,
        },
        {
            title: "Local Events",
            price: "$15k",
            duration: "28 Days Trip",
            image: Europe,
        }
    ]


    return (
        <div className='flex align-c items-center justify-center flex-col'>
            <h1 className='text-1xl text-[#404040] font-bold'>Top Selling</h1>
            <h1 className='text-4xl text-black font-bold'>Top Destinations</h1>

            <div className="flex flex-wrap justify-center md:gap-20 align-center">
                {locations.map((item, index) => (
                    <div
                        className="relative justify-center align-center flex group my-2 xs:w-[100%] sm:w-[45%] md:w-[32%] lg:w-[24%] xl:w-[20%] 2xl:w-[20%] transition-all"
                        key={index}
                    >
                        <LocationCard
                            title={item.title}
                            price={item.price}
                            duration={item.duration}
                            image={item.image}
                            key={index} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TopSelling
