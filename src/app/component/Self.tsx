import React from 'react';

const Self = () => {
    return (
        <div className='w-full bg-slate-100 mt-20 mb-8 pb-14'>
            <p className='text-5xl pt-16 font-bold text-center'>Self serve infrastructure platform for <span className='text-sky-700'>scaling</span></p>
            <p className='text-5xl font-bold text-center pt-4'>teams</p>
            <div className='flex justify-center mt-16'>
                <div>
                    <div className='w-96 h-28 bg-white rounded-2xl pt-4 pl-3'>
                        <div className='h-20 w-20 shadow-xl rounded-2xl flex justify-center'>
                            <img src='/infrastructure.png' className='h-14 w-14 mt-auto' />
                        </div>
                        <div className='h-20 -mt-16'>
                            <p className='text-2xl pl-24 font-bold'>Infrastructure</p>
                            <p className='pl-24 text-xs font-light'>Automated Cloud Infrastructure Workflow</p>
                        </div>
                    </div>
                    <div className='w-96 h-28 bg-white rounded-2xl mt-8 pt-4 pl-3 '>
                        <div className='h-20 w-20 shadow-xl rounded-2xl flex justify-center'>
                            <img src='/neural-network.png' className='h-14 w-14 mt-auto' />
                        </div>
                        <div className='h-20 -mt-16'>
                            <p className='text-2xl pl-24 font-bold'>Networking</p>
                            <p className='pl-24 text-xs font-light'>Flexible Secure Application Connectivity</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-96 h-28 bg-white rounded-2xl ml-60 pt-4 pl-3'>
                        <div className='h-20 w-20 shadow-xl rounded-2xl flex justify-center'>
                            <img src='/cyber-security.png' className='h-14 w-14 mt-auto' />
                        </div>
                        <div className='h-20 -mt-16'>
                            <p className='text-2xl pl-24 font-bold'>Security</p>
                            <p className='pl-24 text-xs font-light'>Modern Secure Infrastructure Approach</p>
                        </div>
                    </div>
                    <div className='w-96 h-28 bg-white rounded-2xl mt-8 ml-60 pt-4 pl-3'>
                        <div className='h-20 w-20 shadow-xl rounded-2xl flex justify-center'>
                            <img src='/development.png' className='h-14 w-14 mt-auto' />
                        </div>
                        <div className='h-20 -mt-16'>
                            <p className='text-2xl pl-24 font-bold'>Applications</p>
                            <p className='pl-24 text-xs font-light'>Automate Application Deployment for Agility</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Self


