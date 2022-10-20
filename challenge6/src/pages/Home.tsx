import React from 'react'
import Banner from '../components/Banner'
import JobBoard from '../components/JobBoard'


const Home = () => {
  return (
    <>
    
    <header className='w-full h-[136px]  bg-mobile-header bg-no-repeat md:bg-tablet-header md:h-[160px] bg-cover xl:bg-desktop-header xl:h-[162px] '>
      <Banner />
    </header> 
    <main>
      <JobBoard />
    </main>


    </>
  )
}

export default Home