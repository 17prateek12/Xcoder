import React from 'react'
import Avatar from '@mui/material/Avatar';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import CircleIcon from '@mui/icons-material/Circle';


const SuccesStory = () => {
    return (
        <div className='w-full mt-32 mb-32'>
            <p className='text-5xl text-blue-800 mt-10 text-center font-bold'>See Our Success Stories</p>
            <div className='flex justify-center items-center mt-44'>
                <Avatar className='bg-blue-700 mr-6'>
                    <img src='/Fleft.png' />
                </Avatar>
                <div className='flex justify-start h-64 w-1/2'>
                    <div className='w-2/12 bg-blue-600 rounded-l-3xl'>
                        <img src='/fff.png' className='mt-24 ml-14' />
                    </div>
                    <div className='flex w-10/12 box shadow-2xl rounded-r-3xl'>
                        <div className='w-3/4'>
                            <p className='text-lg ml-6 mt-6'>There are many variations of passages of Lorem Ipsum available
                                but the majority have sufferg alteration in some form, by injected humour, or
                                randomised words which don't look even slightly believable. If you are going to
                                use a passage.</p>
                            <p className='mt-16 text-end font-bold'>-Abcdefgh Ijklmnop </p>
                            <p className='text-end'>Frontend Engineer</p>
                        </div>
                        <Brightness1OutlinedIcon className='fill-blue-600 h-52 w-52 mt-5 ml-3' />
                    </div>
                </div>
                <Avatar className='bg-blue-700 ml-6'>
                    <img src='/Fright.png' />
                </Avatar>
            </div>
            <div className='flex justify-center mt-8 mx-auto'>
                <CircleIcon className='h-5 w-5 fill-gray-400' />
                <CircleIcon className='h-5 w-5 fill-gray-400' />
                <CircleIcon className='h-5 w-5 fill-gray-400' />
            </div>
        </div>
    )
}

export default SuccesStory