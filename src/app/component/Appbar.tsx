import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

const Appbar = () => {
  return (
    <div className='flex justify-center mt-16'>
         <Stack spacing={3} direction="row">
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Apps</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>App Configs</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Pipelines</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Infra Creation</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Cost</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Add-Ons</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Monitoring</Button>
                <Button variant="contained" className='px-12 py-2 bg-white text-black hover:bg-blue-400'>Connections</Button>
            </Stack>
    </div>
  )
}

export default Appbar