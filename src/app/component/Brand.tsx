import * as React from 'react';
import Button from '@mui/material/Button';


const Brand = () => {
  return (
    <div className='w-full bg-white text-center'>
        <p className='text-7xl mt-1 pt-12 font-bold'>Build your audience and grow your</p>
        <p className='text-7xl pt-3 font-bold'>brand</p>
        <p className='text-2xl pt-12 font-light text-slate-500'>no more, no less. Deploy from our single page of glass, manage them with ease and scale up as fast as</p>
        <p className='text-2xl pt-2 font-light text-slate-500'>your workloads growns.</p>
        <Button variant="contained" className= 'mt-12 px-8 py-3 bg-blue-500 text-xl'>Get Started Now</Button>
        <div className='flex justify-center items-center'>
          <img src="/hero.png" className='w-4/5' alt="Hero Image" />
        </div>  
    </div>
  
   
  )
}

export default Brand