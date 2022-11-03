import axios from 'axios'
import React, { createContext } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import JobInfo from '../components/JobInfo'
import { CompanyInfoType,JobInfoType } from './Home'

const api = "http://localhost:3000/api/jobs/";
export const JobIdInfoContext = createContext<CompanyInfoType&JobInfoType | null>(null);
export type JobUnitType = {

}

export const jobLoader:LoaderFunction =  async ({ params }) => {
	const url = api + params.id;
	console.log(url);
	return axios.get(url).then(res => {
		return res.data;
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