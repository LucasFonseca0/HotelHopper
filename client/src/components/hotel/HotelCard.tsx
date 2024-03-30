import Link from "next/link";
import { Button } from "@nextui-org/react";
import { TiStar } from "react-icons/ti";

import styles from "../../utils/style";

 const HotelCard = ({ hotel, room }:{hotel:Hotel,room:Room}) => {
  
  
  return (
    <section
  key={`${hotel._id}-${room.room_number}`}
  className="w-90% md:w-[70%] h-auto md:h-80 p-4 bg-white flex flex-col md:flex-row rounded-lg shadow-sm"
>
  <div className="w-full md:w-80 h-72 md:h-auto bg-accent text-white flex items-center justify-center text-2xl">
    img
  </div>
  <div className="flex flex-col justify-center md:justify-start text-wrap text-black w-full">
    <div className="w-full flex flex-col md:flex-row md:justify-around">
      <h2 className="text-dark font-bold text-3xl ml-2 mb-2 md:mb-0">{hotel.name}</h2>
      <p className="text-xl m-2 flex items-center">
        {hotel.rating} <TiStar className="text-yellow-400" />
      </p>
    </div>
    <section className="flex md:items-center md:justify-around w-full h-auto md:h-[100%] flex-col md:flex-row justify-between p-4">
      <aside className="h-full flex flex-col justify-around xl:text-xl text-[1.1rem] mb-4 md:mb-0">
        <p><span className="font-bold">{hotel.city}</span></p>
        <p><span className="font-bold">type:</span> {room.type}</p>
        <p><span className="font-bold">capacity:</span> {room.capacity}</p>
      </aside> 
      <section className="md:h-full gap-2 flex justify-around md:flex-col md:justify-end items-center">
        <p className="text-xl sm:text-2xl">€{room.price} per night</p>
        <Link href={`hotels/${hotel._id}/${room.room_number}`} >
          <Button className={`${styles.button} bg-secondary w-[180px] mb-2`}>
            more details
          </Button>
        </Link>
      </section>
    </section>
  </div>
</section>

  )};

  export default HotelCard