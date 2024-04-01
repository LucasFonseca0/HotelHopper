"use client";

import React, { useEffect, useState } from "react";
import Header from "@/src/components/Layout/Header";
import HotelCard from "@/src/components/hotel/HotelCard";
import HotelFilterBar from "@/src/components/hotel/HotelFilterBar";
import NoHotelFind from "@/src/components/hotel/NoHotelFind";
import LoadingSpinner from "@/src/shared/Loading/LoadingSpinner";
import { getAllHotels } from "@/src/api/hotelAPI";

const Page = () => {
  const [hotels, setHotels] = useState([]);
  const [filters, setFilters] = useState<FilterHotels>({});
  const [locations, setLocations] = useState<{ country: string; cities: string[] }[]>([]);
  const [noHotelFind, setNoHotelFind] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHotels = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    const data = await getAllHotels({ filters });
    setIsLoading(false);
    setHotels(data);
    setNoHotelFind(data.length === 0);
  };

  const fetchLocations = async () => {
    const data = await getAllHotels({});
    const LocationsByCountryAndCity = setAllLocationsByCountryAndCity(data);
    setLocations(LocationsByCountryAndCity);
  };

  const setAllLocationsByCountryAndCity = (data: Hotel[]) => {
    const countriesAndCities = [] as { country: string; cities: string[] }[];

    data.forEach((hotel) => {
      const countryIndex = countriesAndCities.findIndex((item) => item.country === hotel.country);
      if (countryIndex === -1) {
        countriesAndCities.push({
          country: hotel.country,
          cities: [hotel.city],
        });
      } else if (!countriesAndCities[countryIndex].cities.includes(hotel.city)) {
        countriesAndCities[countryIndex].cities.push(hotel.city);
      }
    });

    countriesAndCities.sort((a, b) => a.country.localeCompare(b.country));
    countriesAndCities.forEach((country) => country.cities.sort((a, b) => a.localeCompare(b)));

    return countriesAndCities;
  };

  useEffect(() => {
    fetchHotels();
    fetchLocations();
  }, [filters]);

  return (
    <div>
      <Header />
      <main className="h-[calc(100vh - 80px)]">
        <HotelFilterBar setFilters={setFilters} locations={locations} />
        {isLoading && <LoadingSpinner />}
        {noHotelFind && <NoHotelFind />}
        <article className="flex flex-wrap justify-center gap-4 mt-4">
          {hotels.length > 0 &&
            hotels.map((hotel: Hotel) =>
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
