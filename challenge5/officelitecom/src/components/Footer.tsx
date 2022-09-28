import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-footer-pattern bg-auto bg-blackbg'>
      <div className='flex  flex-col mx-6  max-w-[1110px] xl:flex-row xl:justify-between'>
        <div className='flex flex-col xl:items-start '>
          <h2 className='flex flex-row justify-center gap-x-2 font-bold text-base leading-[3rem] tracking-extrawide'> 
            <span className='uppercase text-white'>coming</span>
            <span className='uppercase text-primaryblue'>4  Nov  2020</span> 
          </h2>
          <div className='flex flex-wrap flex-row gap-x-[13px] my-5 md:gap-x-4'>
            <div className='flex  flex-col bg-blacktext rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 text-white text-center mix-blend-normal'><span className='text-[2rem] leading-[3rem] md:text-[3.5rem]'>47</span><span className='text-xs leading-7 opacity-50 md:text-base '>days</span></div>
            <div className='flex  flex-col bg-blacktext rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 text-white text-center mix-blend-normal'><span className='text-[2rem] leading-[3rem] md:text-[3.5rem]'>07</span><span className='text-xs leading-7 opacity-50 md:text-base' >hours</span></div>
            <div className='flex  flex-col bg-blacktext rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 text-white text-center mix-blend-normal'><span className='text-[2rem] leading-[3rem] md:text-[3.5rem]'>56</span><span className='text-xs leading-7 opacity-50 md:text-base'>min</span></div>
            <div className='flex  flex-col bg-blacktext rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 text-white text-center mix-blend-normal'><span className='text-[2rem] leading-[3rem] md:text-[3.5rem]'>14</span><span className='text-xs leading-7 opacity-50 md:text-base'>sec</span></div>
          </div>
        </div>
        <button className='btn-primaryblue my-10 xl:mx-0'>Get Started</button>
      </div>
      
    </footer>
  )
}

export default Footer