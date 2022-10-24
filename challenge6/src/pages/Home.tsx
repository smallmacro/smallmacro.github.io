import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import JobBoard from '../components/JobBoard'


const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
    
    
      <Banner />
    
    
      <JobBoard />
    


    </>
  )
}

export default Home