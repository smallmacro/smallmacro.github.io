import React from 'react'
import { JobDetailType } from './JobInfo'


type JobDescriptionType = {
  jobDetail:JobDetailType 
}

const JobDescription = ({jobDetail}:JobDescriptionType) => {
  const reListMarkUp = jobDetail.requirements.items.map( (item, index) => {
    return(
      <li className='pl-8' key={index}>{item} </li>
    )
  });
  const roleListMarkUp = jobDetail.role.items.map( (item, index) => {
    return(
      <li className='pl-8' key={index}>{item} </li>
    )
  });
  return (
    <div className='mt-6 md:mt-8 px-6 py-10 bg-white rounded-md dark:bg-darkblue md:px-12 md:py-12 flex flex-col'>
      <div className='flex flex-col gap-y-[50px] md:flex-row md:gap-y-0 md:justify-between md:items-center'>
        <div className=' text-darkgray text-base '>
          <span className=''>{jobDetail.postedAt}</span> <span className='mx-3 font-bold'>•</span> <span>{jobDetail.contract}</span>
          <h1 className='text-darkblue dark:text-white font-bold text-xl leading-[25px] md:text-[28px] md:leading-[35px]'>{jobDetail.position}</h1>  
          <span className='text-voilet font-bold text-sm leading-[17px]'>{jobDetail.location}</span>
        </div>
        <div className='w-full md:basis-[141px]'>
          <a href={jobDetail.apply} className=' bg-voilet rounded-[5px] block font-bold text-center text-white py-4 w-full'> Apply Now</a>
        </div>
      </div>
      <div className='mt-8 flex flex-col gap-y-10 text-base text-darkgray'>
        <p>{jobDetail.description}</p>
        <div className='flex flex-col gap-y-8 md:gap-y-6'>
          <h2 className='text-darkblue font-bold text-xl leading-[25px]'>Requirements</h2>
          <p className='-mt-1 md:mt-1'>{jobDetail.requirements.content}</p>
          <ul className='flex flex-col gap-y-2 list-disc ml-4  marker:text-voilet '>
            {reListMarkUp}
          </ul>
        </div>
        <div className='flex flex-col gap-y-8 md:gap-y-6'>
          <h2 className='text-darkblue font-bold text-xl leading-[25px]'>What You Will Do</h2>
          <p className='-mt-1 md:mt-1'>{jobDetail.role.content}</p>
          <ol className='flex flex-col gap-y-2 list-decimal ml-4  marker:text-voilet'>
            {roleListMarkUp}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default JobDescription