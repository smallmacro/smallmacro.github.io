import React from 'react'
import JobDisplay from './JobDisplay'
import LoadMore from './LoadMore'

import SearchForm from './SearchForm'

const JobBoard = () => {
  return (
    <section className=' flex-col mx-6 md:mx-10'>
      <SearchForm />
      
      <JobDisplay />
      <LoadMore />

    </section>
  )
}

export default JobBoard