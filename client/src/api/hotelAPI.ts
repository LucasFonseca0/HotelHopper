// services/user.js
import axios from 'axios';

export async function getUser() {
  const response = await axios.get();
  return response.data;
}

export async function updateUser() {
  const response = await axios.put(`/api/user/`);
  return response.data;
}
