import React from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Toolbar() {
  return (
    <div className='bg-sky-500 shadow-lg'>
    <div className='w-10/12 mx-auto py-4 flex text-white justify-between'>
      <div className='flex gap-4'>
       <div className='text-2xl md:text-4xl font-semibold'>
        <Link to={'/'}>LOGO</Link>
       </div>
       <div className='hidden md:flex gap-4'>
        <Link to={'./about'}>About</Link>
       </div>
      </div>
      <div className='hidden md:flex gap-4'>
        <button className='w-fit h-fit px-6 py-3 border border-white text-sm capitalize'>Sign In</button>
        <button className='w-fit h-fit px-6 py-3 border border-white text-sm capitalize text-sky-500 bg-white'>Sign Up </button>
      </div>
      <IoMenu className='text-4xl md:hidden' />
    </div>
    </div>
  )
}

export default Toolbar
