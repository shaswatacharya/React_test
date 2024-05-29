import React from 'react'
function List({title,icon, description}) {
  return (
    <div className='flex flex-col items-center text-center gap-3'>
        <div className='h-10 w-10 rounded-full bg-gray-400 '>
        {icon}
        </div>
        <div className='text-2xl font-semibold'>
        {title}
        </div>
        <div className='text- line-clamp-4 text-gray-600'>
        {description}
        </div>
        </div>
  )
}

export default List