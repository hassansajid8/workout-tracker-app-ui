import React, { useState } from 'react'
import Image from 'next/image'
import RightIcon from '../lib/assets/RightIcon'

const FloatMsgSecond = () => {
    const [isHidden, setHidden] = useState(false)

    function handleClick(){
        setHidden(true)
    }

    return (
        <div className={isHidden ? 'hidden' : 'h-screen overflow-hidden absolute top-0 z-50 bg-white p-5 flex flex-col justify-around'}>
            <div className='flex justify-center mt-20'>
                <Image id='image' src='/burn.png' width={282} height={282} alt='img' />
            </div>
            <div>
                <p className='text-xl font-medium my-5' id='heading'>Get Burn</p>
                <p id='text'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
            </div>
            <button id='ring' className='p-2 border-r-2 border-b-2 rounded-full border-purple-300 w-min relative left-[290px]'> 
                <div className=' bg-gradient-to-r from-purple-50 to-purple-300 w-16 h-16 rounded-full flex items-center justify-center'>
                    <RightIcon />
                </div>
            </button>
        </div>
    )
}

export default FloatMsgSecond