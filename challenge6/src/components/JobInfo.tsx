import React, { useContext } from 'react'
import { JobIdInfoContext } from '../pages/Jobs'
import CompanyInfo from './CompanyInfo'
import JobDescription from './JobDescription'

const JobInfo = () => {
  const data  = useContext(JobIdInfoContext);
  
  console.log(data);
  return (
    <main>
      <section className='mx-6 md:mx-10 max-w-[1110px] xl:mx-auto'>
        <CompanyInfo />
        <JobDescription />
      </section>
    </main>
  )
}

export default JobInfo