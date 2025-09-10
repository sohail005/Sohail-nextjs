import Image, { StaticImageData } from 'next/image';
import React from 'react';
import navigationimg from '@/Assets/Images/navigation.png'
interface CategoryItemProps {
    title: string;
    price: string;
    duration: string;
    image: string | StaticImageData;
    priority?: boolean;
}
function LocationCard({ title, image, price, duration, priority = false }: CategoryItemProps) {

    return (
        <div className='flex flex-wrap rounded-b '>
            <Image src={image} alt='location' className='z-0 w-full flex' />
            <div className="absolute bottom-0 z-10 flex flex-col transition-all rounded-b-xl bg-white">
                <div className='flex flex-wrap justify-between p-2'>
                    <h1 className='font-bold text-[#84829A]'>{title}</h1>
                    <h1 className='font-bold text-[#84829A]'>{price}</h1>
                </div>
                <div className='flex flex-wrap justify-left p-2'>
                    <Image src={navigationimg} alt='navigation' style={{ width: '10%', height: '50%' }} />
                    <h1 className='font-bold text-[#84829A] pl-5'>{duration}</h1>
                </div>
            </div>

        </div>
    )
}

export default LocationCard
