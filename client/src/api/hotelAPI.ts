import axios from "axios";

export async function getAllHotels({ filters }: { filters?: FilterHotels }) {
  const baseUrl = "http://localhost:8000/hotel";

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
