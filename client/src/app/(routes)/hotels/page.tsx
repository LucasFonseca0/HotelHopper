"use client";

import { getAllHotels } from "@/src/api/hotelAPI";
import React, { useEffect, useState } from "react";

import Header from "@/src/shared/Layout/Header";
import HotelCard from "@/src/components/hotel/HotelCard";
import HotelFilterBar from "@/src/components/hotel/HotelFilterBar";

const Page = () => {
  const [hotels, setHotels] = useState([]);
  const [filters, setFilters] = useState<FilterHotels>({});
  const [locations, setLocations] = useState<
    { country: string; cities: string[] }[]
  >([]);

  const setAllLocationsByCountryAndCity = (data: Hotel[]) => {
    const countriesAndCities = [] as { country: string; cities: string[] }[];

    data.forEach((hotel) => {
      const countryIndex = countriesAndCities.findIndex(
        (item) => item.country === hotel.country
      );
      if (countryIndex === -1) {
        countriesAndCities.push({
          country: hotel.country,
          cities: [hotel.city],
        });
        return; // Sai da iteração atual
      }

      if (!countriesAndCities[countryIndex].cities.includes(hotel.city)) {
        countriesAndCities[countryIndex].cities.push(hotel.city);
      }
    });

    countriesAndCities.sort((a, b) => a.country.localeCompare(b.country));

    countriesAndCities.forEach((country) => {
      country.cities.sort((a, b) => a.localeCompare(b));
    });

    return countriesAndCities;
  };

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getAllHotels({ filters });

      setHotels(data);
      const LocationsByCountryAndCity = setAllLocationsByCountryAndCity(data);
      setLocations(LocationsByCountryAndCity);
    };

    fetchHotels();
  }, [,filters]);

 

  return (
    <div>
      <Header />
      <main>
        <HotelFilterBar setFilters={setFilters} locations={locations} />
        <article className="flex flex-wrap justify-center gap-4 mt-4">
          {hotels.map((hotel: Hotel) =>
            hotel.rooms.map((room) => (
              <HotelCard
                key={`${hotel._id}-${room.room_number}`}
                hotel={hotel}
                room={room}
              />
            ))
          )}
        </article>
      </main>
    </div>
  );
};

export default Page;
