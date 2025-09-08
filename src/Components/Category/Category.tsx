import React from 'react'
import CategoryItem from './Categoryietm'
import Weather from '@/Assets/Images/Weather.png'
import Flights from '@/Assets/Images/Flights.png'
import Events from '@/Assets/Images/Events.png'
import Customization from '@/Assets/Images/Customization.png'


function Category() {
  const categories = [
    {
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
      image: Weather,
    },
    {
      title: "Best Flights",
      description: "Built Wicket longer admire do bartEngrossed listening. Park gate sell they west hard for the.",
      image: Flights,
    },
    {
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      image: Events,
    },
    {
      title: "Local Events",
      description: "We deliver outsourcedaviation services formilitary customers",
      image: Customization,
    }
  ]
  return (
    <div className='w-full h flex items-center justify-center flex-col gap-2 my-10 '>
      <h1 className='text-1xl text-[#404040] font-bold'>CATEGORY</h1>
      <h1 className='text-4xl text-black font-bold'>We Offer Best Services</h1>

      <div className="flex flex-wrap justify-center gap-8 md:gap-10 ">
        {categories.map((item, index) => (
          <div
            className="relative flex group my-4 w-full xs:w-[95%] sm:w-[48%] md:w-[32%] lg:w-[24%] xl:w-[20%] 2xl:w-[21%] transition-all"
            key={index}
          >
            <CategoryItem
              image={item.image}
              title={item.title}
              description={item.description}
            />

            {/* Red card behind, appears on hover */}
            <div
              className="absolute bottom-2 left-[-35px] w-[100px] h-[100px] bg-[#DF6951] 
                 rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300 z-0"
            />
          </div>
        ))}
      </div>



    </div>
  )
}

export default Category