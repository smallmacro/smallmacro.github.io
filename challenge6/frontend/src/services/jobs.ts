import axios from "axios";
import { CompanyInfoType, JobInfoType } from "../pages/Home";

const baseUrl = "http://localhost:8080/api/jobs/";
// const baseUrl = "/api/jobs/";

let token = null as string|null;
// let user = null;
const setToken = (newToken : string) => {
  token =  `Bearer ${newToken}`
}


const getAllJobs = () => {
  
  return axios.get(baseUrl );
}

const getJobById = (id:string) => {
  
  return axios.get(baseUrl + id);
}

const createJob =async (newJob: CompanyInfoType&JobInfoType) => {
  const config = {
    headers: { Authorization: token}
  }
  return axios.post(`${baseUrl}/create`, newJob, config)
}

const updateJob =async (id:string, newJob: CompanyInfoType&JobInfoType) => {
  return axios.put(`${baseUrl}/${id}`, newJob)
}

export default {
  setToken,
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
}