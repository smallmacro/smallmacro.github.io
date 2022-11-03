import React, { useContext } from 'react'
import { RequirementType, RoleType } from '../pages/Home'
import { JobIdInfoContext } from '../pages/Jobs'
import CompanyInfo from './CompanyInfo'
import JobDescription from './JobDescription'

export type SimpleComInfoType = {
  company: string;
  logo: string;
  logoBackground: string;
  website:string;
}
export type JobDetailType = {
  id: number;
  postedAt:string;
  position:string;
  contract: string;
  apply: string;
  location:string;
  description: string;
  requirements: RequirementType;
  role: RoleType;
}

const JobInfo = () => {
  const job = useContext(JobIdInfoContext) as SimpleComInfoType&JobDetailType;
  
  
  const {
    company,
    logo,
    logoBackground,
    website,
    ...jobDetail
  } = job;
  let comInfo :SimpleComInfoType = {company,
    logo,
    logoBackground,
    website};

  
  
  
  return (
    <main>
      <section className='mx-6 md:mx-10 max-w-[1110px] xl:mx-auto'>
        <CompanyInfo comInfo ={comInfo}/>
        <JobDescription jobDetail={jobDetail as JobDetailType}/>
      </section>
    </main>
  )
}

export default JobInfo