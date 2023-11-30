import * as React from 'react';

const Greenhouse = () => {
    
  return (
    <div className='flex justify-center mt-20 mb-20'>
      <div className='flex w-10/12'>
      <div className='h-48 w-56 m-auto'>
        <img src='/image11.png' alt='...' />
        <img src='/image11.png' className='mt-16' alt='...'/>
      </div>
      <div className='h-48 w-56 m-auto'>
      <img src='/image12.png' alt='...'/>
        <img src='/image12.png' className='mt-16' alt='...'/>
      </div>
      <div className='h-48 w-56 m-auto'>
      <img src='/image13.png' alt='...'/>
        <img src='/image13.png' className='mt-16' alt='...'/>
      </div>
      <div className='h-48 w-56 m-auto'>
      <img src='/image14.png' alt='...'/>
        <img src='/image14.png' className='mt-16' alt='...'/>
      </div>
      </div>
    </div>
  )
}

export default Greenhouse