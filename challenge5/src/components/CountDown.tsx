import React from 'react'
export interface InputBgColor  {
  bgColor : string;
}
const CountDown = ({bgColor} :InputBgColor) => {
  const digitColor = bgColor === 'black'? 'text-white' : 'text-primaryblue';
  const textColor = bgColor === 'black'? 'text-white' : 'text-blacktext';
  const backgroundColor = bgColor === 'black' ? 'bg-blacktext' : 'bg-grayblue10'
  return (
    <div className='flex flex-col xl:items-start max-w-[448px] mx-auto xl:mx-0'>
          <h2 className='flex flex-row justify-center gap-x-2 font-bold text-base leading-[3rem] tracking-extrawide'> 
            <span className={`uppercase ${textColor}`}>coming</span>
            <span className='uppercase text-primaryblue'>4  Nov  2020</span> 
          </h2>
          <div className='flex flex-wrap flex-row gap-x-[13px] my-5 md:gap-x-4'>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>47</span><span className='text-xs leading-7 opacity-50 md:text-base '>days</span></div>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>07</span><span className='text-xs leading-7 opacity-50 md:text-base' >hours</span></div>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>56</span><span className='text-xs leading-7 opacity-50 md:text-base'>min</span></div>
            <div className={`flex flex-1 flex-col ${backgroundColor} rounded-[0.25rem] px-4 py-3 md:rounded-xl md:py-4 ${textColor} text-center mix-blend-normal`}><span className={`text-[2rem] leading-[3rem] md:text-[3.5rem] ${digitColor}`}>14</span><span className='text-xs leading-7 opacity-50 md:text-base'>sec</span></div>
          </div>
        </div>
  )
}

export default CountDown