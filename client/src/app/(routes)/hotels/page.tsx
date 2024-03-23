"use client";

import { getAllHotels } from "@/src/api/hotelAPI";
import React, { useEffect, useState } from "react";

import Header from "@/src/shared/Layout/Header";
import HotelCard from "@/src/components/hotel/HotelCard";
import HotelFilterBar from "@/src/components/hotel/HotelFilterBar";

const Page = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getAllHotels();
      setHotels(data);
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <Header />
      <main> 
        <HotelFilterBar hotels={hotels} setHotels={setHotels} />
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
