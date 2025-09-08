import Image from "next/image";
import React from "react";
import Weather from "../../Assets/Images/Weather.png";

interface CategoryItemProps {
    title: string;
    description:string;
    image:any;
}

function CategoryItem({ title,description,image}: CategoryItemProps) {
    return (
        <div className="group bg-white relative my-10 w-80 flex flex-col items-center justify-center gap-2 text-center 
            p-6 rounded-xl transition-all duration-300 cursor-pointer 
            hover:shadow-lg hover:rounded-3xl hover:shadow-gray-100 overflow-hidden z-10">

            {/* Red card behind content can be added outside this component */}

            <Image src={image} alt="Category Image" width={130} height={130} className="relative z-10" />
            <h1 className="text-2xl text-black font-bold py-2 font-poppins relative z-10">{title}</h1>
            <p className="text-base text-[#807C7C] font-normal font-poppins relative z-10">
                {description}
            </p>

        </div>
    );
}

export default CategoryItem;
