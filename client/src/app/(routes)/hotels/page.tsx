"use client";

import { getAllHotels } from "@/src/api/hotelAPI";
import Header from "@/src/shared/Layout/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../../utils/style";
import { Button } from "@nextui-org/react";

const Page = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getAllHotels();
      setHotels(data);
    };

    fetchHotels();
  }, []);

  const FilterNav = () => {
    return <></>;
  };

  const HotelCards = () => {
    return hotels.map((hotel: any) =>
      hotel.rooms.map((room: any) => (
        <section className="w-[70%] h-80 p-4 m-2 bg-white flex flex-col items-center md:flex-row  rounded-lg shadow-sm">
          <div className="w-80 h-72 max-w-[90%] bg-accent text-white  flex items-center justify-center text-2xl">
            img
          </div>
          <div className="h-[100%] flex flex-col justify-center md:justify-start text-wrap text-black">
              <h2 className="text-dark font-bold">{hotel.name}</h2>
            <div>
              <p>{hotel.city}</p>
              <p>{hotel.rating}</p>
              <p>{room.type}</p>
            </div>
            <div>
              <p>{room.price}</p>
              <Link href={hotel._id}>
                <Button
                  className={`${styles.button} bg-secondary w-[180px] md:mb-12`}
                >
                  more details
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))
    );
  };

  return (
    <div>
      <Header />
      <main>
        <FilterNav />
        <article className="flex flex-wrap  justify-center">
          <HotelCards />
        </article>
      </main>
    </div>
  );
};

export default Page;
