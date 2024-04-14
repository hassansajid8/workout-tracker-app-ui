'use client'
import BarChart from '@/app/components/BarChart';
import Toggle from '@/app/components/Toggle';
import WarningIcon from '@/app/lib/assets/WarningIcon';
import Link from 'next/link';
import Image from 'next/image';

export default function Tracker() {
  return (
    <main className="flex flex-col justify-between items-center p-5 pt-24">
      <div className='max-h-screen scrollbar'>
        {/* Graph Container */}
        <div className='w-full mb-10'>
          <Link href={'/a/tracker/schedule'}>
          <BarChart />
          </Link>
          <div className='flex w-full justify-start items-center p-5 border border-slate-50 rounded-xl bg-gradient-to-r from-purple-50 to-white mt-5'>
            <WarningIcon />
            <p className='text-xs w-4/5 mx-2 font-medium'>You've burned fewer calories than yesterday. Time to get moving! </p>
          </div>
        </div>

        {/* Upcoming */}
        <div className='w-full'>
          <div className='flex justify-between items-center w-full'>
            <h1 className='font-semibold'>Upcoming Workout</h1>
            <Link href={''} className='text-sm text-slate-100'>See more</Link>
          </div>

          <div className='flex items-center justify-between shadow-lg px-3 rounded-2xl h-20 mb-6'>
            <div className='flex px-3 my-5'>
              <Image src="/fullbody.png" alt='img' width={50} height={50} className='bg-purpleFaded rounded-full'></Image>
              <div className='flex flex-col justify-center mx-2'>
                <p className='font-medium'>Full Body Workout</p>
                <p className='text-xs'>Today 3pm</p>
              </div>
            </div>
            <Toggle />
          </div>

          <div className='flex items-center justify-between shadow-lg px-3 rounded-2xl h-20 mb-6'>
            <div className='flex px-3 my-5'>
              <Image src="/upperbody.png" alt='img' width={50} height={50} className='bg-purpleFaded rounded-full h-[50px]'></Image>
              <div className='flex flex-col justify-center mx-2'>
                <p className='font-medium'>Upper Body Workout</p>
                <p className='text-xs'>4 Feb, 3:30pm</p>
              </div>
            </div>
            <Toggle />
          </div>

        </div>

        {/* What do you want to train */}
        <div className='w-full'>
          <p className='font-semibold'>What do you want to train</p>

          <div className='bg-purple-80 flex justify-between items-center rounded-xl p-3 mt-5'>
            <div className='flex flex-col text-sm leading-loose'>
              <p>Full Body Workout</p>
              <div className='flex flex-col text-xs leading-loose'>
              <p>Arms</p>
              <p>Chest</p>
              <p>Legs</p>
              </div>
            </div>
            <Image src={'/fullbody2.png'} alt='img' width={100} height={100} className='bg-purple-100 rounded-full'/>
          </div>

        </div>
        <br /><br /><br /><br />
      </div>
    </main>
  );
}
