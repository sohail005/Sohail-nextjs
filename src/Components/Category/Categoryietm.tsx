import Image, { StaticImageData } from "next/image";
import React from "react";

interface CategoryItemProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    priority?: boolean;
}

function CategoryItem({ title, description, image, priority = false }: CategoryItemProps) {
    return (
        <div className="group bg-white relative my-10 w-80 flex flex-col items-center justify-center gap-2 text-center 
            p-6 rounded-xl transition-all duration-300 cursor-pointer 
            hover:shadow-lg hover:rounded-3xl hover:shadow-gray-100 overflow-hidden z-10">

            <Image 
                src={image} 
                alt={`${title} category`} 
                width={130} 
                height={130} 
                className="relative z-10"
                priority={priority}
            />
            <h2 className="text-2xl text-black font-bold py-2 font-poppins relative z-10">
                {title}
            </h2>
            <p className="text-base text-[#807C7C] font-normal font-poppins relative z-10">
                {description}
            </p>
        </div>
    );
}

export default CategoryItem;