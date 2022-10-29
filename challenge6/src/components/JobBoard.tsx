import React, { useContext } from 'react'
import { JobContext } from '../pages/Home'
import JobDisplay from './JobDisplay'
import LoadMore from './LoadMore'

import SearchForm from './SearchForm'

const JobBoard = () => {
  const jobsData = useContext(JobContext);
  console.log(jobsData);
  return (
    <main>
      
    <section className=' flex-col mx-6 md:mx-10 max-w-[1110px] xl:mx-auto'>
      <SearchForm />
      
      <JobDisplay />
      <LoadMore />

    </section>

    </main>
  )
}

export default JobBoard