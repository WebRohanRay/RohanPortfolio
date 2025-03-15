import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[active,setActive]=useState('');
  const[Toggle,setToggle]=useState(false);
  return (
    <>
   <nav
    className='w-full flex items-center py-6 px-10 sm:px-40  fixed top-0 z-20 bg-black' >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("");
          window.scroll(0,0)
        }}>
          <img src="/vite.svg" alt="" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex gap-2'>Rohan <span className='sm:block hidden'>Web-Developer</span></p>
        </Link>
        <ul
         className='list-none  text-white hidden sm:flex flex-row  gap-10  '>
          <li><Link >About</Link></li>
          <li><Link>Work</Link></li> <li><Link>Contact</Link></li>
         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src= {Toggle? " /xmark-solid.svg" :"/bars-solid.svg " } className='h-[28px] w-[28px] object-contain  ' alt=""
        onClick={()=>{
          setToggle(!Toggle);
        }} />
       {/* to be correct the spacing b/w thhe top div and below div */}
              <div className={`${!Toggle ? 'hidden' : 'flex'} p-6  absolute right-0 top-20 z-1 bg-black w-full
              `}>
                  <ul className='list-none text-white flex flex-col items-center w-full'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
                   
                    </div>

          </div> 
      </div>
    </nav>
    </>
  )
}

export default Navbar