import axios from "axios";
const baseUrl= "https://devjobs.fly.dev/api/login/";
type credentialType = {
  username: string,
  password: string,
}

const login = async (credentials:credentialType) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data
}

export default {login}