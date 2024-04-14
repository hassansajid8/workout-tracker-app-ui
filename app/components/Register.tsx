import React from 'react'
import GoogleIcon from '../lib/assets/GoogleIcon'
import FacebookIcon from '../lib/assets/FacebookIcon'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='w-full'>
        <h1 className='text-xl font-semibold'>Create an account</h1>
        <form className='w-full flex flex-col items-center my-5 h-[480px]'>
            <input className='formInput' type='text' placeholder='First Name' />
            <input className='formInput' type='text' placeholder='Last Name' />
            <input className='formInput' type='email' placeholder='Email' />
            <input className='formInput' type='password' placeholder='Password' />
            <label className='w-full text-xs flex items-center'>
            <input type='checkbox' className='checkbox w-[22px] h-[22px]' />
            <p className='mx-3'>By proceeding, I agree to all <a href="" className='text-blue underline mx-0'>T&C</a> and <a href="" className='text-blue underline'> Privacy Policy</a></p>
            </label>
        </form>
        <Link href="/a">
        <button className='w-full h-12 rounded-xl bg-gradient-to-r from-purple-200 to-purple-500 text-white font-semibold'>Create an account</button>
        </Link>
        <p className='text-center bg-white relative top-3 p-2 w-min mx-auto z-20'>Or</p>
        <hr className='relative bottom-2' />
        <div className='w-full flex justify-center items-center mt-5'>
            <div className='py-3 w-11 mx-4 flex justify-center rounded-xl border'><GoogleIcon /></div>
            <div className='py-3 w-11 mx-4 flex justify-center rounded-xl border'><FacebookIcon /></div>
        </div>
    </div>
  )
}

export default Register