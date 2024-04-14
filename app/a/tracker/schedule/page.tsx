import LeftIcon from '@/app/lib/assets/LeftIcon'
import RightIcon from '@/app/lib/assets/RightIcon'
import React from 'react'

const Schedule = () => {
    return (
        <main className="flex flex-col justify-between items-center p-5 pt-16 overflow-hidden">
            {/* Calender */}
            <div className='w-full'>
                <div className='flex items-center justify-center mb-3'>
                    <LeftIcon />
                    <p className='mx-3'>Feb 2024</p>
                    <RightIcon />
                </div>
                <div className='w-full flex justify-evenly items-center font-medium'>
                    <div className='flex flex-col items-cnnter justify-center p-5 rounded'>
                        <p className='text-xs'>Sun</p>
                        <p className='text-2xl'>5</p>
                    </div>
                    <div className='flex flex-col items-cnnter justify-center p-5 rounded-xl bg-gradient-to-r from-purple-100 to-purple-300 text-white'>
                        <p className='text-xs'>Mon</p>
                        <p className='text-2xl'>6</p>
                    </div>
                    <div className='flex flex-col items-cnnter justify-center p-5 rounded'>
                        <p className='text-xs'>Tue</p>
                        <p className='text-2xl'>7</p>
                    </div>
                    <div className='flex flex-col items-cnnter justify-center p-5 rounded'>
                        <p className='text-xs'>Wed</p>
                        <p className='text-2xl'>8</p>
                    </div>
                    <div className='flex flex-col items-cnnter justify-center p-5 rounded'>
                        <p className='text-xs'>Thu</p>
                        <p className='text-2xl'>9</p>
                    </div>
                </div>
            </div>

            {/* Schedule */}
            <div className='flex flex-col my-5 w-full'>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>06:00 AM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>07:00 AM</p>
                    <hr  className='w-[475px] relative right-10'/>
                    <div className='absolute left-[211px] top-[282px] bg-gradient-to-r from-pink-100 to-pink-300 p-2 text-white rounded-2xl text-xs'>
                        <p>Ab Workout, 7:30 AM</p>
                    </div>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>08:00 AM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>09:00 AM</p>
                    <hr  className='w-[475px] relative right-10'/>
                    <div className='absolute left-[110px] top-[390px] bg-gradient-to-r from-pink-100 to-pink-300 p-2 text-white rounded-2xl text-xs'>
                        <p>Upper Body Workout, 9:00 AM</p>
                    </div>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>10:00 AM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>11:00 AM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>12:00 PM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>01:00 PM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>02:00 PM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>03:00 PM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>04:00 PM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
                <div className='font-medium text-sm py-3'>
                    <p className='mb-2'>05:00 PM</p>
                    <hr  className='w-[475px] relative right-10'/>
                </div>
            </div>
            
            <div className='fixed bottom-[135px] right-[16px] bg-gradient-to-r from-pink-100 to-pink-300 w-16 h-16 rounded-full flex items-center justify-center'>
                <p className='text-center text-white text-4xl'>+</p>
            </div>

        </main>
    )
}

export default Schedule