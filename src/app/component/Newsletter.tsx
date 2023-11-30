import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const Newsletter = () => {
    return (
        <div className='flex justify-center items-center'>
            <Box className='w-3/4 bg-blue-200 mt-20 rounded-3xl'>
                <div className='flex justify-center mt-20'>
                    <img src='/PaperPlane.png' alt='...' />
                </div>
                <p className='text-5xl text-center text-black font-bold mt-14'>Subscribe to Our Newsletter & get the</p>.
                <p className='text-5xl text-center text-black font-bold -mt-3'>Coupon code.</p>
                <p className='mt-10 text-center text-xl	'>All your information is completely confidential</p>
                <div className='flex justify-center mt-10 mb-20'>
                    <FormControl className=' bg-white rounded-xl w-2/6'>
                        <TextField
                            id="outlined-password-input"
                            label="Type Your Email"
                        />
                    </FormControl>
                    <Button variant="contained" className='h-14 w-40 bg-blue-600 ml-4'>Subscribe</Button>
                </div>
            </Box>
        </div>
    )
}

export default Newsletter