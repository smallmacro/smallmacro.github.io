import axios from "axios";
const baseUrl= "http://localhost:8080/api/login/";
type credentialsType = {
  username: string,
  password: string,
}

const login = async (credentials:credentialsType) => {
  console.log(credentials)
  const response = await axios.post(baseUrl, credentials);
  return response.data
}

export default {login}