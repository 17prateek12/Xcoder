import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const WhiteBox = () => {
    return (
        <div className='flex justify-center items-center'>
            <Box className='w-3/4 bg-white mt-20 rounded-3xl'>
                <div className='text-4xl mt-24 font-bold flex justify-center space-x-3'>
                    <p>The Xerocodee way </p>
                    <img src='/Rocket.png' />
                </div>
                <div className='w-3/4 m-auto mt-40'>
                    <div className='text-center mx-auto w-full h-1/2'>
                        <p className='text-3xl'>01</p>
                        <div className='w-20 border-b-2 border-blue-500 mx-auto'></div>
                        <p className='text-2xl text-blue-900 mt-16 font-bold'>Self Serve Infrastructure</p>
                        <p> Accelerate by self-serving production-ready infrastructure and customize as you scale.</p>
                    </div>
                    <div className='flex w-full h-1/2 mt-10'>
                        <div className='w-1/2'>
                            <Button className='bg-white text-black hover:bg-blue-500 px-8 hover:text-white'>Your Cloud</Button>
                            <Button className='bg-white text-black hover:bg-blue-500 px-8 hover:text-white'>Infra Components</Button>
                            <Button className='bg-white text-black hover:bg-blue-500 px-8 hover:text-white'>Self-hosted Apps</Button>
                            <img src='/cloud.png' className='m-auto' />
                        </div>
                        <div className='w-1/2'>
                            <p className='text-xl text-blue-900 font-bold ml-2 mt-40'>In Your Cloud</p>
                            <p className='mt-4 ml-2'>Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon)</p>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 m-auto mt-40'>
                    <div className='text-center mx-auto w-full h-1/2'>
                        <p className='text-3xl'>02</p>
                        <div className='w-20 border-b-2 border-blue-500 mx-auto'></div>
                        <p className='text-2xl text-blue-900 mt-16 font-bold'>Deploy applications, fast!</p>
                        <p className='text-base'>Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.</p>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='w-1/2 ml-4'>
                            <img src='/pipeline.png' />
                        </div>
                        <div className='w-1/2'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Configurable Build and Deploy pipelines</p>
                            <p className='text-base'>Portable builds powered by Dagger and continuous deployments powered</p>
                            <p className='text-base'>by ArgoCD - you gain more control of your pipelines with composable</p>
                            <p className='text-base'>custom, build, and deploy stages.</p>
                        </div>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='w-1/2 ml-4'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Push to Deploy</p>
                            <p className='text-base'>Just connect your repo with one click and push. Argonaut’s deep integration</p>
                            <p className='text-base'>with GitHub Actions and GitLab pipelines build and deploy your code on </p>
                            <p className='text-base'>every push.</p>
                        </div>
                        <div className='w-1/2'>
                            <img src='/deploy.png' />
                        </div>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='w-1/2 ml-4'>
                            <img src='/tools.png' />
                        </div>
                        <div className='w-1/2'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Multiple runtimes</p>
                            <p className='text-base'>Quickly deploy apps to containerized or serverless runtimes on your cloud</p>
                            <p className='text-base'>and customize architectures to cost and performance constraints. Deploy on</p>
                            <p className='text-base'>Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud</p>
                            <p className='text-base'>Functions.</p>
                        </div>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='w-1/2 ml-4'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Scale infinitely</p>
                            <p className='text-base'>Every deployment is a zero-downtime deployment without you needing to </p>
                            <p className='text-base'>choose custom configurations. You can easily configure auto-scaling,</p>
                            <p className='text-base'>resource limits, and health-check URL to further optimize application uptime.</p>
                        </div>
                        <div className='w-1/2'>
                            <img src='/scale.png' />
                        </div>
                    </div>
                </div>
                <div className='w-3/4 m-auto mt-40 mb-24'>
                <div className='text-center mx-auto w-full h-1/2'>
                        <p className='text-3xl'>03</p>
                        <div className='w-20 border-b-2 border-blue-500 mx-auto'></div>
                        <p className='text-2xl text-blue-900 mt-16 font-bold'>Visibility into costs and metrics</p>
                        <p className='text-base'>Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.</p>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='w-1/2 ml-40'>
                            <img src='/cost.png' />
                        </div>
                        <div className='w-1/2 -ml-40'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Customizable cost dashboards and reports</p>
                            <p className='text-base'>Stay on top of your cloud spending with custom cost dashboards and</p>
                            <p className='text-base'>reports — sort, filter, and group by your various accounts, resources, and</p>
                            <p className='text-base'>cloud regions</p>
                        </div>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='w-1/2 ml-4'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Preview infra costs</p>
                            <p className='text-base'>See the cost of a specific resource while choosing it (before provisioning). It</p>
                            <p className='text-base'> with GitHub Actions and GitLab pipelines build and deploy your code on </p>
                            <p className='text-base'>cloud provider or tools.</p>
                        </div>
                        <div className='w-1/2 ml-24'>
                            <img src='/preview.png' />
                        </div>
                    </div>
                    <div className='flex w-full mt-14'>
                        <div className='flex w-1/2 ml-16 mt-4'> 
                            <div className='w-5 h-8 bg-blue-300 mt-12'></div>
                            <div className='w-5 h-12 bg-blue-400 mt-8'></div>
                            <div className='w-5 h-16 bg-blue-500 mt-4'></div>
                            <div className='w-5 h-20 bg-blue-600'></div> 
                            <div className='ml-8'>
                            <img src='/observability.png' />
                            </div>
                        </div>
                        <div className='w-1/2 -ml-16'>
                            <p className='text-xl text-blue-900 font-bold mb-4'>Observability From Day One</p>
                            <p className='text-base'>Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and</p>
                            <p className='text-base'>observability tools of your choice, such as Grafana/Loki, DataDog,</p>
                            <p className='text-base'>Prometheus, and more. Stay on top of your application metrics from day 1.</p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default WhiteBox