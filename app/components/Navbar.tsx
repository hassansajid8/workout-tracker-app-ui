import React from 'react'
import HomeIcon from '@/app/lib/assets/HomeIcon'
import TrackerIcon from '@/app/lib/assets/TrackerIcon'
import ProfileIcon from '@/app/lib/assets/ProfileIcon'
import CameraIcon from '@/app/lib/assets/CameraIcon'
import SearchIcon from '@/app/lib/assets/SearchIcon'

const Navbar = () => {
  return (
    <div className='w-full fixed bottom-0 max-w-[425px] bg-white px-5 py-2 z-50'>
      <div className='flex justify-between items-center bg-primaryPurple'>
        <a href=""><HomeIcon /></a>
        <a href=""><TrackerIcon /></a>
        <a href="" className='relative bottom-7 bg-gradient-to-r from-purple-100 to-purple-300 p-5 bg-purple border-50 rounded-full'><SearchIcon /></a>
        <a href=""><CameraIcon /></a>
        <a href=""><ProfileIcon /></a>
      </div>
    </div>
  )
}

export default Navbar