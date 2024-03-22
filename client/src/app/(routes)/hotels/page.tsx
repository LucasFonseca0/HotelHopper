"use client";

import { getAllHotels } from "@/src/api/hotelAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../../../utils/style";
import Header from "@/src/shared/Layout/Header";
import { Button } from "@nextui-org/react";
import { TiStar } from "react-icons/ti";


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
      hotel.rooms.map((room: any, index: number) => (
        <section
          key={hotel._id + room.room_number}
          className="w-[70%] md:h-80 p-4 m-2 bg-white flex flex-col items-center md:flex-row  rounded-lg shadow-sm"
        >
          <div className=" w-[100%] h-96 md:w-80 md:h-72   bg-accent text-white  flex items-center justify-center text-2xl">
            img
          </div>
          <div className="h-[100%] w-[100%] flex flex-col justify-center md:justify-start text-wrap text-black">
            <div className=" w-full flex justify-between flex-col md:flex-row">
              <h2
                className="text-dark font-bold text-3xl ml-2
                "
              >
                {hotel.name}
              </h2>
              <p className="text-xl m-2 flex items-center">{hotel.rating} <TiStar className="text-yellow-400"/></p>
            </div>
            <section className="flex md:items-center md:justify-around w-[100%] h-[100%] flex-col md:flex-row justify-between p-4">
              <aside className="h-full flex flex-col justify-around sm:text-xl text-[1.1ºrem]">
                <p>{hotel.city}</p>
                <p>{room.type}</p>
                <p>{room.description}</p>
              </aside>
              <section className="md:h-[100%] flex justify-around md:flex-col md:justify-end  items-center ">
                <p className="text-xl sm:text-2xl ">€ {room.price } per night</p>
                <Link href={`${hotel._id}/${room.room_number}`}>
                  <Button
                    className={`${styles.button} bg-secondary w-[180px] md:mb-12`}
                  >
                    more details
                  </Button>
                </Link>
              </section>
            </section>
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
