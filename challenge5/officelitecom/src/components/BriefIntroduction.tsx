import React from 'react';
import LogoName from './LogoName';

import illustrationChart from '../assets/home/illustration-charts.svg';



const BriefIntroduction = () => {
  return (
    <section className='w-full flex flex-col max-w-[1110px] gap-y-8 my-0 mx-auto bg-header-pattern bg-contain bg-top bg-no-repeat md:items-start md:bg-right'>
      <div className=' flex flex-row my-12 mx-auto  md:my-[4.5rem] md:mx-10 xl:mx-0 xl:my-[5.125rem]'>
        <LogoName />
        
      </div>
      <div className='flex flex-col mx-6 gap-y-8 md:flex-row-reverse md:mx-10 xl:mx-0 '>
          <div className='md:flex-1 md:my-auto'>
            <img src={illustrationChart} className="w-[171px] h-[192px] my-0 mx-auto flex md:w-[281px] md:h-[314px] xl:w-[475px] xl:h-[531px] " alt="price chart" />
          </div>
          
          <div className='flex flex-col justify-center gap-y-6 md:flex-1 xl:items-start'>
            <h2 className='font-bold text-[40px] text-blacktext leading-[48px] xl:text-[56px] xl:leading-[64px]'>A simple solution to complex tasks is coming soon</h2>
            <p className='my-8 text-center text-graytext xl:text-lg xl:text-left'>Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new 
            collaboration platform built with an intuitive interface to improve productivity.</p>
            <button className='btn-primaryblue xl:mx-0'>Get Started</button>
          </div>
      </div>

    </section>
  )
}

export default BriefIntroduction