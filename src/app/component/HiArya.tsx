import React from 'react';


const HiArya = () => {
    return (
        <div className='flex justify-center'>           
            <div className='relative mt-32  bg-gray-300'>
                <img
                    src="/dashboard-1.png"
                    alt="Background Image"
                />
                <img src='/dashboard-2.png'
                    className='absolute bottom-0 left-0 -mb-4 -ml-56'
                    alt='...'
                />
                <div className="w-32 h-20 absolute left-0 top-0 -ml-64 bg-blue-600 rounded-full rounded-tr-3xl rounded-br-full rounded-bl-full">
                </div>
                <div className="w-52 h-28 absolute left-0 top-0 -ml-44 mt-12 md:rotate-90 bg-blue-300 rounded-tl-3xl rounded-full rounded-br-full rounded-b-full">
                </div>
                <img src='/dashboard-3.png'
                    className='absolute top-0 right-0 -mt-4 -mr-56'
                    alt='...'
                />
                <div className="w-32 h-20 absolute right-0 bottom-0 -mr-64 md:rotate-180 bg-blue-600 rounded-full rounded-tr-3xl rounded-br-full rounded-bl-full">
                </div>
                <div className="w-52 h-28 absolute right-0 bottom-0 -mr-44 mb-12 md:-rotate-90 bg-blue-300 rounded-tl-3xl rounded-full rounded-br-full rounded-b-full">
                </div>
            </div>
        </div>
    )
}
export default HiArya