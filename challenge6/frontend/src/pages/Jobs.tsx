import React, { createContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import JobInfo from '../components/JobInfo'
import { CompanyInfoType,JobInfoType } from './Home'

export const JobIdInfoContext = createContext<CompanyInfoType&JobInfoType | null>(null);
export type JobUnitType = {

}

const Jobs = () => {
	const data = useLoaderData() as Array<CompanyInfoType&JobInfoType> | null;

	let jobUnit:CompanyInfoType&JobInfoType | null= data === null ? null : data[0];


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