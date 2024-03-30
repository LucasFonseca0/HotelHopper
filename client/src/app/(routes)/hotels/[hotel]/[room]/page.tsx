"use client"

import { getRoomByID } from '@/src/api/hotelAPI';
import CarouselImage from '@/src/components/hotel/room/CarouselImage';
import Header from '@/src/shared/Layout/Header';
import LoadingSpinner from '@/src/shared/Loading/LoadingSpinner';
import React, { useEffect, useState } from 'react';

const Page = ({ params }: { params: { hotel: string, room: string } }) => {
  const [roomDetails, setRoomDetails] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    const fetchRoom = async () => {
        setIsLoading(true)
      try {
        const room = await getRoomByID(params.hotel, params.room);
        setRoomDetails(room);
      } catch (error) {
        console.error("Error fetching room:", error);
      }
      setIsLoading(false)
    };

    fetchRoom();
  }, [params.hotel, params.room]);
  
  return (<>
        <Header/>
      <div className='p-2'>
      <div className='bg-white rounded-lg p-3' >
          <h2 className='text-accent font-bold flex justify-center items-center m-2 text-xl'>
            Room Details
          </h2>
          {
              isLoading && <LoadingSpinner/>
            }
          {roomDetails && (
              <div className=' text-black'>
               {roomDetails.imagesURI && <CarouselImage imagesURI={roomDetails.imagesURI} />}
              <h2>{roomDetails.type}</h2>
              <p>Room Number: {roomDetails.room_number}</p>
              <p>Capacity: {roomDetails.capacity}</p>
              <p>Description: {roomDetails.description}</p>
              <p>Price: €{roomDetails.price}</p>
              {
                  roomDetails?.amenities && <p className='text-wrap'>ammenties: {roomDetails.amenities.map((data)=>`${data} `)}</p>
                  
              }
            </div>
          )}
      </div>
    </div>
      </>
  );
};

export default Page;

