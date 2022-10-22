import React from 'react'
import CompanyInfo from './CompanyInfo'
import JobDescription from './JobDescription'

const JobInfo = () => {
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