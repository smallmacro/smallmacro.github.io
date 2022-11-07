import axios from 'axios'
import React, { createContext } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import JobInfo from '../components/JobInfo'
import { CompanyInfoType,JobInfoType } from './Home'
import jobService from '../services/jobs'

export const JobIdInfoContext = createContext<CompanyInfoType&JobInfoType | null>(null);


export const jobLoader:LoaderFunction =  async ({ params }) => {
	
	return jobService.getJobById(Number(params.id)).then(res => {
		return res.data;
	}).catch(err => {
		console.error(err);
	})
}


const Jobs = () => {
	const jobUnit = useLoaderData() as CompanyInfoType&JobInfoType | null;
	


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