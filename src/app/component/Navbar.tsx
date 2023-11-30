import * as React from 'react'
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div className='w-11/12 h-20 bg-white rounded-xl text-center flex  items-center mx-auto border shadow-2xl'>
      <img src='/logoX.png' className='ml-20' alt='...'/>
      <div className='flex justify-center mx-auto'>
        <Button className='text-lg'>Home</Button>
        <Button className='text-lg'>Team</Button>
        <Button className='text-lg'>Contact</Button>
        <Button className='text-lg'>Careers</Button>
      </div>
      <Button className='mr-20 text-lg' variant="outlined">Sign in</Button>
    </div>
  )
}

export default Navbar