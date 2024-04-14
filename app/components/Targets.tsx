import Link from 'next/link'
import React from 'react'

const Targets = () => {
  return (
    <div className='absolute top-0 h-screen bg-white w-full z-[50] p-5'>
        <p className='text-center text-xl font-medium mb-10'>What are your goals?</p>

        <div className='bg-slate-50 flex justify-between items-center px-3 py-4 rounded-xl my-5'>
            <p className='font-medium'>Weight Loss</p>
            <input type="checkbox" className="checkbox w-[22px] h-[22px]" />
        </div>
        <div className='bg-slate-50 flex justify-between items-center px-3 py-4 rounded-xl my-5'>
            <p className='font-medium'>Muscle Gain</p>
            <input type="checkbox" className="checkbox w-[22px] h-[22px]" />
        </div>
        <div className='bg-slate-50 flex justify-between items-center px-3 py-4 rounded-xl my-5'>
            <p className='font-medium'>Flexibility & Mobility</p>
            <input type="checkbox" className="checkbox w-[22px] h-[22px]" />
        </div>
        <div className='bg-slate-50 flex justify-between items-center px-3 py-4 rounded-xl my-5'>
            <p className='font-medium'>General Fitness</p>
            <input type="checkbox" className="checkbox w-[22px] h-[22px]" />
        </div>
        <div className='bg-slate-50 flex justify-between items-center px-3 py-4 rounded-xl my-5'>
            <p className='font-medium'>Event-specific training</p>
            <input type="checkbox" className="checkbox w-[22px] h-[22px]" />
        </div>
        <div className='bg-slate-50 flex justify-between items-center px-3 py-4 rounded-xl my-5'>
            <p className='font-medium'>Mindfulness & Mental Health</p>
            <input type="checkbox" className="checkbox w-[22px] h-[22px]" />
        </div>

        <Link href="/tracker">
        <button className='w-full h-12 rounded-xl bg-gradient-to-r from-purple-200 to-purple-500 text-white font-semibold mt-36'>Confirm</button>
        </Link>
    </div>
  )
}

export default Targets