"use client";

import { useEffect, useState } from "react";
import { Select, SelectItem, Avatar, Selection } from "@nextui-org/react";
import flags from "@/src/utils/tagFlags";

const HotelFilterBar = ({

  setFilters,
  locations,
}: {
 
  setFilters: any;
  locations: { country: string; cities: string[] }[];
}) => {
  const [countries, setCountries] = useState<Selection>(new Set([]));

  

  useEffect(() => {
    setFilters({
      countries:countries
    })
    
    
   
  }, [countries]);

  return (
    <div className="sticky top-0 bg-transparentBg z-10">
      <nav className="h-20 w-full">
        <Select
          className="max-w-xs"
          label="Select country"
          selectionMode="multiple"
          selectedKeys={countries}
          onSelectionChange={setCountries}
        >
          {locations.map((location) => (
            <SelectItem
              key={location.country}
              value={location.country}
              startContent={
                <Avatar
                  alt={location.country}
                  className="w-6 h-6"
                  src={`https://flagcdn.com/${
                    flags[location.country.toLowerCase().replace(/ /g, "_")]
                  }.svg`}
                />
              }
            >
              {location.country}
            </SelectItem>
          ))}
        </Select>
      </nav>
    </div>
  );
};

export default HotelFilterBar;
