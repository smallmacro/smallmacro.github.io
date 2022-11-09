import axios from 'axios'
import React, { createContext } from 'react'
import { LoaderFunction, useLoaderData, useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import JobInfo from '../components/JobInfo'
import { CompanyInfoType,JobInfoType } from './Home'
import jobService from '../services/jobs'
import { QueryClient, useQuery } from '@tanstack/react-query'
import ErrorBoundary from '../components/ErrorBoundary'

export const JobIdInfoContext = createContext<CompanyInfoType&JobInfoType | null>(null);


const getJobByIdQuery = (id: number) => ({
  queryKey: ['jobs', id],
  queryFn: async () => jobService.getJobById(id)
})
type JobParamsType = {
	params: {
		id:string;
	} 
}

// export const jobLoader = (queryClient:QueryClient) => {
// 	return async ({params}:JobParamsType) => {
// 		const query = getJobByIdQuery(Number(params.id));
// 		return queryClient.getQueryData(query.queryKey) ??
// 		(await queryClient.fetchQuery(query))
// 	}
// }
	


const Jobs = () => {
	// const jobUnit = useLoaderData() as CompanyInfoType&JobInfoType | null;
	const params = useParams();

	const {data, isLoading, isError} = useQuery(["jobs",params.id], () => jobService.getJobById(Number(params.id)));

	const jobUnit = data?.data as CompanyInfoType&JobInfoType | null
	
	if (isLoading) {
		return (
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
	
		<JobIdInfoContext.Provider value={jobUnit} >
			<JobInfo />
			<Footer />
		</JobIdInfoContext.Provider>
		
		
	</>
  )
}

export default Jobs