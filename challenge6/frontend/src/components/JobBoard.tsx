import React, { useContext, useState } from 'react'
import { CompanyInfoType, JobContext } from '../pages/Home'
import JobList from './JobList'

import LoadMore from './LoadMore'

import SearchForm from './SearchForm'

const JobBoard = () => {
  const jobsData = useContext(JobContext);
  let comInfoData = jobsData?.map( job => {
    const {
      id,
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      location
    }
     = job;
     return {
      id,
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      location
    };
  }) as CompanyInfoType[];
  const [comInfo, setComInfo] = useState(comInfoData);
  
  return (
    <main>
      
    <section className=' flex-col mx-6 md:mx-10 max-w-[1110px] xl:mx-auto'>
      <SearchForm comInfo={comInfo} setComInfo={setComInfo}/>
      
      <JobList companyInfo={comInfo}/>
      <LoadMore />

    </section>

    </main>
  )
}

export default JobBoard