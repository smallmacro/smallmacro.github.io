import React, { createContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import JobBoard from '../components/JobBoard'

export type CompanyInfoType = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}
export type RequirementType = {
  content: string;
  items: Array<string>
}
export type RoleType = {
  content: string;
  items: Array<string>
}

export type JobInfoType = {
  id: number;
  website: string;
  apply : string;
  description:string;
  requirements: RequirementType;
  role: RoleType;
}

export async function homeLoader(){
  return fetch("./data.json");//this loader function will only return a singal job description in the end;
}

export const JobContext = createContext<Array<CompanyInfoType&JobInfoType> | null>(null);
const Home = () => {
  const data = useLoaderData() as Array<CompanyInfoType&JobInfoType>| null;
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