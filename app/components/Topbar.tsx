import React from 'react'
import LeftIcon from '../lib/assets/LeftIcon'

const Topbar = () => {
  return (
    <div className='w-full fixed top-0 max-w-[425px] bg-white flex items-center p-5 z-50'>
        <div className='bg-slate-50 rounded p-2'><LeftIcon /></div>
        <p className='text-xl font-semibold mx-auto'>Workout Tracker</p>
    </div>
  )
}

export default Topbar