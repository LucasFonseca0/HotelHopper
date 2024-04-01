import axios from "axios";


const baseUrl = "http://localhost:8000/";



export async function signupUser(data:UserSignup): Promise<UserSignup> {
  const URL = `${baseUrl}user`;
  const response = await axios.post(URL,data);
  return response.data;
}

export async function LoginUSer(data:UserLogin): Promise<UserToken>{
  const URL = `${baseUrl}login`;
  const response = await axios.get(URL);
  return response.data;
}
