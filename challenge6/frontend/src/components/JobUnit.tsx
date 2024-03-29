import React from 'react'
import { Link } from 'react-router-dom';
import { CompanyInfoType } from '../pages/Home'

export type JobUnitType = {
  info: CompanyInfoType;
}

const JobUnit = ({info}:JobUnitType) => {
  const baseUrl = "/jobs/";

  return (
    <Link className='relative block pt-[49px] pl-8 pb-8 rounded-md bg-white dark:bg-darkblue pr-[9px] md:pr-[27px] xl:pr-8 ' to={baseUrl+info._id}>
      <div className={`w-[50px] h-[50px]  rounded-[15px] absolute -top-[25px] left-8 flex items-center justify-center`} style={{"backgroundColor":`${info.logoBackground}`}}>
        <img src={`/${info.logo.slice(9)}`} alt='logo' className={``}/>
      </div>
      <div className='flex flex-col text-darkgray'>
        <p className='mb-4'> <span>{info.postedAt}</span> <span className='mx-3 font-bold'>•</span><span>{info.contract}</span></p>
        <h2 className='font-bold text-xl text-darkblue dark:text-white leading-[25px] mb-[17px]'>{info.position}</h2>
        <span className='mb-11'>{info.company}</span>
        <span className='text-voilet font-bold text-sm'>{info.location}</span>
      </div>
    </Link>
  )
}

export default JobUnit