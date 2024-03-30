import axios from "axios";

const baseUrl = "http://localhost:8000/hotel";

export async function getAllHotels({ filters }: { filters?: FilterHotels }) {

  const objectFilters: { [key: string]: string[] } = Object.fromEntries(
    Object.entries(filters || {})
      .map(([key, value]) => [key, Array.from(value?.values() || [])])
  );

  const queryString = Object.entries(objectFilters)
    .flatMap(([key, values]) => values.map(value => `${key}=${encodeURIComponent(value)}`))
    .join("&");

  const URL = `${baseUrl}${queryString ? `?${queryString}` : ""}`;

  const response = await axios.get(URL);

  return response.data;
}

export async function getHotelByID(hotelID: string): Promise<Hotel> {
  const URL = `${baseUrl}/${hotelID}`;
  const response = await axios.get(URL);
  return response.data;
}

export async function getRoomByID(hotelID:string,room_number:string): Promise<Room>{
  const URL = `${baseUrl}/${hotelID}/${room_number}`;
  const response = await axios.get(URL);
  return response.data;
}
