import React from 'react'

function Toolbar() {
  return (
    <div className='bg-sky-500 shadow-lg'>
    <div className='w-10/12 mx-auto py-4 flex text-white justify-between'>
      <div>
        LOGO and LINK
      </div>
      <div>
        <button className='w-'>Sign In</button>
        <button className='w-'>Sign Up </button>
      </div>
    </div>
    </div>
  )
}

export default Toolbar
