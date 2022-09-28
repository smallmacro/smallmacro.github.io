import React from 'react';
import LogoName from './LogoName';

import illustrationChart from '../assets/home/illustration-charts.svg';



const BriefIntroduction = () => {
  return (
    <section className='w-full flex flex-col max-w-[1280px] my-0 mx-auto'>
      <div className=' flex  my-12 mx-auto justify-center md:justify-start md:ml-10 md:my-[6rem] xl:ml-[165px]'>
        <LogoName />
        
      </div>
      <div className='flex flex-col mx-6  md:flex-row-reverse md:mx-10 xl:ml-[165px]'>
          <div className='md:flex-1'>
            <img src={illustrationChart} className="w-[171px] h-[192px] my-0 mx-auto flex md:w-[281px] md:h-[314px] xl:w-[475px] xl:h-[531px] " alt="price chart" />
          </div>
          
          <div className='flex flex-col justify-center md:flex-1'>
            <h2 className='font-bold text-[40px] text-blacktext leading-[48px] xl:text-[56px] xl:leading-[64px]'>A simple solution to complex tasks is coming soon</h2>
            <p className='my-8 text-center text-graytext xl:text-[18px]'>Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new 
            collaboration platform built with an intuitive interface to improve productivity.</p>
            <button className='btn-primaryblue'>Get Started</button>
          </div>
      </div>

    </section>
  )
}

export default BriefIntroduction