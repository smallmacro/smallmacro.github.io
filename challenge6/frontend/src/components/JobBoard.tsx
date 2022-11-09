import React, { useContext, useState } from 'react'
import { CompanyInfoType, JobContext } from '../pages/Home'
import JobList from './JobList'

import LoadMore from './LoadMore'

import SearchForm from './SearchForm'

const JobBoard = () => {
  const jobsData = useContext(JobContext);
  let comInfoData = jobsData?.map( job => {
    const {
      id,
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      location
    }
     = job;
     return {
      id,
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      location
    };
  }) as CompanyInfoType[];
  const [comInfo, setComInfo] = useState(comInfoData);

  const [filterParms, setFilterParms] = useState({
    title:"",
    location:"",
    isFullTime: false,
  });
  let afterFilterInfo = !filterParms.title ? comInfo : comInfo.filter( info => info.company.toLowerCase().includes(filterParms.title)).concat(
    comInfo.filter(info => info.position.toLowerCase().includes(filterParms.title))
  );
  afterFilterInfo = !filterParms.location ? afterFilterInfo : afterFilterInfo.filter(info => info.location.toLowerCase().includes(filterParms.location));
  afterFilterInfo = filterParms.isFullTime? afterFilterInfo.filter(info => info.contract.toLowerCase().includes("full time")): afterFilterInfo;
 
  
  return (
    <main>
      
    <section className=' flex-col mx-6 md:mx-10 max-w-[1110px] xl:mx-auto'>
      <SearchForm  setFilterParms={setFilterParms}/>
      
      <JobList companyInfo={afterFilterInfo}/>
      <LoadMore />

    </section>

    </main>
  )
}

export default JobBoard