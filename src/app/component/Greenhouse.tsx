import * as React from 'react';

const Greenhouse = () => {
    
  return (
    <div className='flex justify-center mt-20 mb-20'>
      <div className='flex w-10/12'>
      <div className='h-48 w-56 m-auto'>
        <img src='/image11.png' />
        <img src='/image11.png' className='mt-16'/>
      </div>
      <div className='h-48 w-56 m-auto'>
      <img src='/image12.png' />
        <img src='/image12.png' className='mt-16'/>
      </div>
      <div className='h-48 w-56 m-auto'>
      <img src='/image13.png' />
        <img src='/image13.png' className='mt-16'/>
      </div>
      <div className='h-48 w-56 m-auto'>
      <img src='/image14.png' />
        <img src='/image14.png' className='mt-16'/>
      </div>
      </div>
    </div>
  )
}

export default Greenhouse