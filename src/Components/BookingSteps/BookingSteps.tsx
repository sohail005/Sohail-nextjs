import Image from 'next/image'
import React from 'react'
import EasyAndFast from '../../Assets/Images/EasyAndFast.png'
import Step1 from '../../Assets/Images/Step1.png'
import Step2 from '../../Assets/Images/Step2.png'
import Step3 from '../../Assets/Images/Step3.png'

function BookingSteps() {
    return (
        <div className='mx-auto flex flex-col md:flex-row gap-2 px-15 align-center justify-center'>
            <div className='flex-1 my-12 md:my-10 h-auto md:h rounded-lg flex-col justify-center text-lg md:text-2xl text-gray-500 align-center'>
                <p className='text-[#5E6282] font-bold text-base md:text-md lg:text-l mb-2 px-15 pt-15'>Easy and Fast</p>
                <h1 className='text-[#000] font-bold text-base md:text-md lg:text-5xl mb-2 px-15'>Book your next trip in 3 easy steps</h1>
                <div className="flex flex-1 px-15 mt-10 items-center justify-center">
                    <Image
                        src={Step1}
                        alt="Main Image"
                        className="rounded-lg h-10 w-10"
                    />
                    <div className="flex-col pl-5">
                        <p className="text-[#5E6282] font-bold text-sm md:text-sm lg:text-sm">
                            Choose Destination
                        </p>
                        <p className="text-[#5E6282] text-base md:text-md lg:text-sm mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 px-15 mt-2 items-center justify-center">
                    <Image
                        src={Step2}
                        alt="Main Image"
                        className="rounded-lg h-10 w-10"
                    />
                    <div className="flex-col pl-5">
                        <p className="text-[#5E6282] font-bold text-sm md:text-sm lg:text-sm">
                            Make Payment
                        </p>
                        <p className="text-[#5E6282] text-base md:text-md lg:text-sm mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 px-15 mt-2 items-center justify-center">
                    <Image
                        src={Step3}
                        alt="Main Image"
                        className="rounded-lg h-10 w-10"
                    />
                    <div className="flex-col pl-5">
                        <p className="text-[#5E6282] font-bold text-sm md:text-sm lg:text-sm">
                            Reach Airport on Selected Date
                        </p>
                        <p className="text-[#5E6282] text-base md:text-md lg:text-sm mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>


            </div>
            <div className='flex-1 sm:my-1 md:my-4 rounded-lg flex justify-center items-center text-lg md:text-2xl text-gray-500 
    w-[95%] sm:w-[40%] md:w-[50%]  lg:w-[50%] xl:w-[50%] 2xl:w-[40%] 
    mx-auto transition-all'>
                <Image src={EasyAndFast} alt="Main Image" width={500} height={400} className='rounded-lg' />

            </div>
        </div>
    )
}

export default BookingSteps