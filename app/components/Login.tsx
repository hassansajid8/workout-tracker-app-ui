import React from 'react'
import GoogleIcon from '../lib/assets/GoogleIcon'
import FacebookIcon from '../lib/assets/FacebookIcon'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='w-full'>
        <h1 className='text-xl font-semibold'>Welcome Back</h1>
        <form className='w-full flex flex-col items-center my-5 h-[480px]'>
            <input className='formInput' type='email' placeholder='Email' />
            <input className='formInput' type='password' placeholder='Password' />
            <a href="" className='underline text-xs w-full text-slate-100'>Forgot your password?</a>
        </form>
        <Link href="/a">
        <button className='w-full h-12 rounded-xl bg-gradient-to-r from-purple-200 to-purple-500 text-white font-semibold'>Sign in</button>
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

export default Login