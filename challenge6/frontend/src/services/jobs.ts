import axios from "axios";

const baseUrl = "https://devjobs.fly.dev/api/jobs/";

const getAllJobs = () => {
  
  return axios.get(baseUrl );
}

const getJobById = (id:number) => {
  return axios.get(baseUrl + id);
}

export default {
  getAllJobs: getAllJobs,
  getJobById: getJobById,
}