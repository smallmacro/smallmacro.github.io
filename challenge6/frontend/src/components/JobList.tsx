import React from 'react'
import { CompanyInfoType } from '../pages/Home'
import JobUnit from './JobUnit'

export type DisplayInfo = {
  companyInfo: CompanyInfoType[]| undefined;
}

const JobList = ({companyInfo} :DisplayInfo) => {

  const jobUnitMarkUp = companyInfo?.map( (info ,index) => {
    return (
      <JobUnit info={info} key={index}/>
    )
    
  })
  
  
  return (
    <div className='grid grid-cols-1 mt-[57px] mb-8 gap-y-[49px] md:mb-14 md:grid-cols-2 md:gap-y-[65px] md:gap-x-[11px] md:mt-[70px] xl:grid-cols-3 xl:mt-[105px] xl:gap-x-[30px]'>
      
      {jobUnitMarkUp}
    </div>
  )
}

export default JobList