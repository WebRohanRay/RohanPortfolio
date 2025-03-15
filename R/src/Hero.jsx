import React from 'react'
import Model1 from './Model1'

const Hero = () => {
  return (
    <div>
        <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-wrap items-start gap-5'>
            <div className='py-6 px-10 sm:px-40'>
                <h1 className='text-4xl font-semibold  text-white sm:text-5xl'>
                    Hi, I am <span className='text-purple-700'>Rohan</span>
                </h1>
                <p className='mt-2 text-white'>
                    I am a Web Developer and a UI/UX Designer. <br className='sm:block '/>I am passionate about creating beautiful and functional websites.
                   
                </p>
            </div> 
           
        </div>
        
    </div>
  )
}

export default Hero
