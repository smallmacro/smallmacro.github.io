import React, { createContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import JobBoard from '../components/JobBoard'

export type CompanyInfo = {
  company: string;
  logo: SVGElement;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}
export type Requirement = {
  content: string;
  items: Array<string>
}
export type Role = {
  content: string;
  items: Array<string>
}

export type JobInfo = {
  id: number;
  website: string;
  apply : string;
  description:string;
  requirements: Requirement;
  role: Role;
}

const Home = () => {
  const data = useLoaderData() as Array<CompanyInfo&JobInfo>| null;
 
  const JobContext = createContext<Array<CompanyInfo&JobInfo> | null>(null);

  return (
    <>
    
    
      <Banner />
    
      <JobContext.Provider value={data} >
        <JobBoard />
      </JobContext.Provider>
    


    </>
  )
}

export default Home