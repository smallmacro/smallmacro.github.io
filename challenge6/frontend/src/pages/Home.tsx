import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import ErrorBoundary from '../components/ErrorBoundary';
import JobBoard from '../components/JobBoard'
import jobService from '../services/jobs'

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

// const getAllJobsQuery = () => ({
//   queryKey: ['alljobs'],
//   queryFn: jobService.getAllJobs(),
// })

// export const homeLoader = (queryClient:QueryClient) => {
//   return async () => {
//       const query = getAllJobsQuery();
//       return queryClient.getQueryData(query.queryKey) ??
//         (await queryClient.fetchQuery(query))
//   }
// }


export const JobContext = createContext<Array<CompanyInfoType&JobInfoType> | null>(null);
const Home = () => {
  // const data = useLoaderData() as Array<CompanyInfoType&JobInfoType>| null;
  const {data, isLoading, isError,isFetching} = useQuery(['jobs'], () => jobService.getAllJobs());
  const jobData = data?.data as Array<CompanyInfoType&JobInfoType>| null;
  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  if(isError){
    return(
      <ErrorBoundary />
    )
  }
  return (
    <>
    
    
      <Banner />
      
      <JobContext.Provider value={jobData} >
        <JobBoard />
      </JobContext.Provider>
    


    </>
  )
}

export default Home