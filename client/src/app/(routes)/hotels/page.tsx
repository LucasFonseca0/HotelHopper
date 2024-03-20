'use client'

import { getAllHotels } from "@/src/api/hotelAPI";
import Header from "@/src/shared/Layout/Header";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getAllHotels();
      setHotels([])
      setHotels(data);
    };

    fetchHotels();
  }, []);

  const HotelCard = () => {
    return hotels.map((data: any) => (
      <section>
        <img src={data.image} alt={`${data.name} image`} />
        <h1>{data.name}</h1>
      </section>
    ));
  };

  return (
    <div>
      <Header />
      <main>
        <article>
          <HotelCard />
        </article>
      </main>
    </div>
  );
};

export default Page;