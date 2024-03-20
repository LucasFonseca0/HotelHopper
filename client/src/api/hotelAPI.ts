import axios from 'axios';

const  URL = "http://localhost:8000/hotel"

export async function getAllHotels() {
  const response = await axios.get(URL);
  console.log(response)
  return response.data;
}

