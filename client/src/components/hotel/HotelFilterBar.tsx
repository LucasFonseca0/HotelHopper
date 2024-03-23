import { Dispatch, SetStateAction } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import flags from "@/src/utils/tagFlags";



  

const HotelFilterBar = ({
  hotels,
  setHotels,
  locations,
}: {
  hotels: Hotel[];
  setHotels: Dispatch<SetStateAction<never[]>>;
  locations: { country: string; cities: string[] }[];
}) => {
    console.log(`https://flagcdn.com/${flags["spain"]}.svg`)
    return (
  <div className="sticky top-0 bg-transparentBg z-10">
    <nav className="h-20 w-full">
      <Select className="max-w-xs" label="Select country">
      {locations.map((location) => (
          <SelectItem
          key={location.country}
          startContent={
            <Avatar
              alt={location.country}
              className="w-6 h-6"
              src={`https://flagcdn.com/${flags[location.country.toLowerCase().replace(/ /g, '_')]}.svg`}

            />
          }
        >
          {location.country}
        </SelectItem>
        ))}
      </Select>
    </nav>
  </div>
)};

export default HotelFilterBar;
