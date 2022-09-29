import React from 'react'
import CountDown from './CountDown'

function Footer() {
  return (
    <footer className='w-full bg-footer-pattern bg-auto bg-center bg-blackbg   absolute top-[50%] z-0 pt-[55rem] md:pt-[34rem] xl:pt-[20rem]'>
      <div className='flex  flex-col mx-6  max-w-[1110px] xl:flex-row xl:justify-between xl:mx-auto xl:mb-[6rem]'>
        <CountDown bgColor={'black'}/>
        <button className='btn-primaryblue  my-10 xl:mx-0 xl:self-center '>Get Started</button>
      </div>
      
    </footer>
  )
}

export default Footer