import React, { useState, useEffect } from 'react'
export interface InputBgColor  {
  bgColor : string;
}

type Timer = {
  [key: string] :number;
  days: number ;
  hours: number;
  min: number;
  sec: number;
}

const CountDown = ({bgColor} :InputBgColor) => {
  const digitColor = bgColor === 'black'? 'text-white' : 'text-primaryblue';
  const textColor = bgColor === 'black'? 'text-white' : 'text-blacktext';
  const backgroundColor = bgColor === 'black' ? 'bg-blacktext' : 'bg-grayblue10';
  //set the date counting down to 4 Nov 2022
  
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = (+new Date(`11/04/${year}`)) - (+new Date());
   
    let timeLeft = {} as Timer;
    if (difference > 0) {
      timeLeft = {
        days: Math.floor( (difference / 1000 / 60 / 60 / 24)),
        hours: Math.floor((difference / 1000 / 60 / 60) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60 )
      }
    }
    return timeLeft;
  }
  const [year, setYear] = useState(new Date().getFullYear());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  
    return () => {
      clearTimeout(timer)
    }
  })
  
  const timerMarkups = Object.keys(timeLeft).map((key) => {
    
    if (timeLeft[key] === undefined) {
      return <div></div>;
    }
    
    
    
    let intervalStr:string = timeLeft[key] >= 10 ? timeLeft[key].toString() : '0' + timeLeft[key].toString();
    return(
      <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3  md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] w-[39px] md:w-[63px] md:text-[3.5rem] ${digitColor}`}>{intervalStr}</span><span className='text-xs leading-7 opacity-50 md:text-base '>{key}</span></div>
    )
  })


  return (
    <div className='flex flex-col xl:items-start max-w-[448px] mx-auto xl:mx-0'>
          <h2 className='flex flex-row justify-center gap-x-2 font-bold text-base leading-[3rem] tracking-extrawide'> 
            <span className={`uppercase ${textColor}`}>coming</span>
            <span className='uppercase text-primaryblue'>4  Nov  {year}</span> 
          </h2>
          <div className='flex flex-wrap flex-row gap-x-[13px] my-5 md:gap-x-4'>
            {/* <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>47</span><span className='text-xs leading-7 opacity-50 md:text-base '>days</span></div>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>07</span><span className='text-xs leading-7 opacity-50 md:text-base' >hours</span></div>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>56</span><span className='text-xs leading-7 opacity-50 md:text-base'>min</span></div>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>14</span><span className='text-xs leading-7 opacity-50 md:text-base'>sec</span></div> */}
            { timerMarkups.length? timerMarkups : `<div>Time is up <div/>` }
          </div>
    </div>
  )
}

export default CountDown