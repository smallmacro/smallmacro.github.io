import React, { useContext } from 'react'
import { JobIdInfoContext } from '../pages/Jobs';
import { JobDetailType, SimpleComInfoType } from './JobInfo';

type ApplyType = {
  apply: string;
  company: string;
  position: string;

}
const Footer = () => {
  const job = useContext(JobIdInfoContext) as SimpleComInfoType&JobDetailType;
  
  const {apply, company, position} :ApplyType = job; 
  return (
    <footer className='w-full bg-white dark:bg-darkblue rounded-md  mt-16 mb-0 '>
      <div className='px-6 py-6 max-h-[96px] w-full md:px-10 md:py-[22px] md:flex md:flex-row md:justify-between'>
        <div className='hidden md:flex md: flex-col text-darkgray'>
          <span className='font-bold text-lg text-darkblue dark:text-white leading-[25px]'>{position}</span>
          <span className='leading-5 text-base'>{company}</span>
        </div>
        <a href={apply} className='text-white bg-voilet block text-center text-base leading-5 rounded-md font-bold w-full py-4 md:basis-[141px]'>Apply Now</a>
      </div>
    </footer>
  )
}

export default Footer