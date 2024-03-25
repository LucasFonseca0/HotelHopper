import axios from 'axios';


export async function getAllHotels({filters}:{filters:FilterHotels}) {

  let  URL = "http://localhost:8000/hotel"

  const response = await axios.get(URL);
  

  
  console.log(filters.countries)
  return response.data;
}

