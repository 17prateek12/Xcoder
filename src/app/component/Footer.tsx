import * as React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Footer = () => {
    return (
        <div className='flex justify-center bg-blue-100 mt-96 mb-28'>
            <div className='mt-20 w-3/5 h-96'>
                <div className='flex justify-center items-center h-80 w-full'>
                    <div className='h-80 w-80'>
                        <p className='pt-16 text-base'>You get just what you need to run your cloud
                            workloads--no more, no less.
                            Deploy from our single pane of glass,
                            manage them with ease and scale
                            up as fast as your workload grows
                        </p>
                        <div className='flex justify-start mt-20 items-center'>
                            <CircleIcon className='mr-1 fill-blue-400 h-10 w-10' />
                            <CircleIcon className='mr-1 fill-blue-300 h-10 w-10' />
                            <CircleIcon className='mr-4 fill-blue-200 h-10 w-10' />
                            <EmailOutlinedIcon className='h-6 w-6' />
                        </div>
                    </div>
                    <div className='h-80 w-48 ml-8'>
                        <p className='text-2xl text-blue-900'>Our Links</p>
                        <p className='pt-10 text-base'>Home</p>
                        <p className='pt-4 text-base'>About Us</p>
                        <p className='pt-4 text-blue-500 text-base'>Integrations</p>
                        <p className='pt-4 text-base'>Team</p>
                        <p className='pt-4 text-base'>Blog</p>
                    </div>
                    <div className='h-80 w-72 ml-24'>
                        <p className='text-2xl text-blue-900'>Our Services</p>
                        <p className='pt-10 text-base'>
                            <a href='https://www.hashicorp.com/solutions/infrastructure-provisioning' target='_blank' rel='noopener noreferrer'>
                                Infrastructure provisioning
                            </a>
                        </p>
                        <p className='pt-4 text-base'>Network infrastructure automation</p>
                        <p className='pt-4 text-base'>Cost optimization</p>
                        <p className='pt-4 text-base'>Cloud migration</p>
                        <p className='pt-4 text-base'>Kubernetes at scale</p>
                    </div>
                    <div className='h-80 w-72 ml-40'>
                        <p className='text-2xl text-blue-900'>Other Links</p>
                        <p className='pt-10 text-base'>FAQ</p>
                        <p className='pt-4 text-base'>Careers</p>
                        <p className='pt-4 text-base'>Privacy Policy</p>
                        <p className='pt-4 text-base'>Trems & Condition</p>
                        <p className='pt-4 text-base'>Support</p>
                    </div>
                </div>
                <div className='flex justify-start items-center h-16 w-full'>
                    <p className='text-lg'>Terms & Condition  |   Privacy Policy </p>
                    <p className='ml-auto text-lg'>Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer