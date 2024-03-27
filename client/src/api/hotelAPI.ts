import axios from "axios";

export async function getAllHotels({ filters }: { filters?: FilterHotels }) {
  const baseUrl = "http://localhost:8000/hotel";

  const objectFilters: { [key: string]: string[] } = Object.keys(
    filters || {}
  ).reduce((acc, key) => {
    acc[key] = filters![key as keyof FilterHotels]
      ? Array!.from(filters![key as keyof FilterHotels]!.values())
      : [];
    return acc;
  }, {} as { [key: string]: string[] });


    const queryParams: string[] = [];
    for (const key in objectFilters) {
      if (objectFilters.hasOwnProperty(key)) {
        const values = objectFilters[key as keyof FilterHotels];
        if (values && values.length > 0) {
          values.forEach((value) => {
            queryParams.push(`${key}=${encodeURIComponent(value)}`);
          });
        }
      }
    }
  

  const queryString = queryParams.length > 0 ? queryParams.join("&") : "";
  const URL = `${baseUrl}${queryString ? `?${queryString}` : ""}`;

  const response = await axios.get(URL);

  return response.data;
}
