import * as React from 'react'
import Box from '@mui/material/Box';

const Bluebox = () => {
    return (
        <div className='flex justify-center items-center'>
            <Box className='w-3/4 bg-blue-600 mt-20 rounded-3xl text-white'>
                <div className='text-center mt-20 text-5xl font-bold'>
                    <p>
                        Modernize Apps, Infrastructure With Cloud Native
                    </p>
                    <p>
                        Tech for Resilience, Scalability.
                    </p>
                </div>
                <div className='flex w-3/4 m-auto mt-44'>
                    <div className='w-3/4 -ml-20 -mt-6'>
                        <img src='/real-time.png' alt='...'/>
                    </div>
                    <div className='-ml-10 mt-4'>
                        <p className='text-5xl font-bold'>Real-time Risk</p>
                        <p className='text-5xl font-bold mb-12'> Monitoring</p>
                        <p>Real-time risk monitoring across your</p>
                        <p>infrastructure and application ecosystem</p>
                        <p>will help you maintain ongoing</p>
                        <p>compliance with more than 05+ different</p>
                        <p>regulatory standards.</p>
                    </div>
                </div>
                <div className='flex w-3/4 m-auto mt-10 mb-28'>
                    <div className='w-2/3 ml-20 mt-36'>
                        <p className='text-5xl font-bold'>Collaborative</p>
                        <p className='text-5xl font-bold mt-3'>Workflows</p>
                        <p className='mt-2'>Share artefacts easily and collaborate with team</p>
                        <p>members, auditors, and pen testers via automated</p>
                        <p>procedures. To manage daily compliance with</p>
                        <p>automatic notifications and reminders, create,</p>
                        <p>assign, and track tasks.</p>
                    </div>
                    <div>
                        <img src='/collaboration.png' alt='...'/>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Bluebox