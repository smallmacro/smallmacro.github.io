import React from 'react'

const JobUnit = () => {
  return (
    <div className='relative pt-[49px] pl-8 pb-8 rounded-md bg-white dark:bg-darkblue pr-[9px] md:pr-[27px] xl:pr-8 '>
      <div className='w-[50px] h-[50px] bg-orange-500 rounded-[15px] absolute -top-[25px] left-8'>
        <img src='' alt='logo' className='w-full h-full'/>
      </div>
      <div className='flex flex-col text-darkgray'>
        <p className='mb-4'> <span>5h ago</span> <span className='mx-3 font-bold'>•</span><span>Full Time</span></p>
        <h2 className='font-bold text-xl text-darkblue dark:text-white leading-[25px] mb-[17px]'>Senior Software Engineer</h2>
        <span className='mb-11'>Scoot</span>
        <span className='text-voilet font-bold text-sm'>United Kingdom</span>
      </div>
    </div>
  )
}

export default JobUnit