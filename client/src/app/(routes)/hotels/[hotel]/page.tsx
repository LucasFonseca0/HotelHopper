"use client"

import { getHotelByID } from '@/src/api/hotelAPI'
import React, { useEffect, useState } from 'react'

const Page = ({ params }: { params: { hotel: string } }) => {
  const [hotelInformations, setHotelInformations] = useState<Hotel | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const hotel = await getHotelByID(params.hotel);
        setHotelInformations(hotel);
      } catch (error) {
        console.error("Error fetching hotel:", error);
      }
    };

    fetchHotel();
  }, [params.hotel]);

  return (
    <div>
      <h1 className='text-black font-bold'>
        Hotel Information
      </h1>
      {hotelInformations && (
        <>
          <h2>{hotelInformations.name}</h2>
          <p>Rating: {hotelInformations.rating}</p>
          <p>Country: {hotelInformations.country}</p>
          <p>City: {hotelInformations.city}</p>
          <h3>Rooms:</h3>
          <ul>
            {hotelInformations.rooms.map(room => (
              <li key={room.room_number}>
                Room Number: {room.room_number}, Capacity: {room.capacity}, Type: {room.type}, Price: {room.price}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Page;
