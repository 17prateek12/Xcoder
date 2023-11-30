import React from 'react';

const Wxerocode = () => {
  return (
    <div className='flex mt-32'>
      <div className='w-1/2 text-center'>
      <p className='text-3xl'>Without Xerocodee</p>
      <div className='flex justify-center'>
      <img src='/without.png' alt='...' />
      </div>
      </div>
      <div className='w-1/2 text-center'>
      <p className='text-3xl'>With Xerocodee</p>
      <div className='flex justify-center'>
      <img src='/with.png' alt='...' />
      </div>
      </div>
    </div>
  )
}

export default Wxerocode