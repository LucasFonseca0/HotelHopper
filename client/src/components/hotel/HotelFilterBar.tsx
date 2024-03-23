import { Dispatch, SetStateAction } from "react";

const HotelFilterBar = ({
  hotels,
  setHotels,
}: {
  hotels: Hotel[];
  setHotels: Dispatch<SetStateAction<never[]>>;
}) => (
  <div className="sticky top-0 bg-dark z-10">
    <nav className="h-20 w-full">
      
    </nav>
  </div>
);

export default HotelFilterBar;
