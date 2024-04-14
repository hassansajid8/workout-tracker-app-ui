import React from 'react'

const Toggle = () => {
  return (
    <label className='switch px-1 rounded-xl'>
        <input className='switchInput' type='checkbox'/>
        <span className='slider my-auto'></span>
    </label>
  )
}

export default Toggle