import Image, { StaticImageData } from 'next/image';
import React from 'react'
interface CategoryItemProps {
    title: string;
    price: string;
    duration: string;
    image: string | StaticImageData;
    priority?: boolean;
}
function LocationCard({ title, image, price, duration, priority = false }: CategoryItemProps) {

    return (
        <div className='flex flex-wrap'>
            <Image src={image} alt='location' className='z-0' />
            <div className='absolute bottom-0 bg-red-400 z-10'>
<h1>{title}</h1>
            </div>
        </div>
    )
}

export default LocationCard
