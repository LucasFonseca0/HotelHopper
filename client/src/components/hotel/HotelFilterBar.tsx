"use client";

import { useEffect, useState } from "react";
import { Select, SelectItem, Avatar, Selection } from "@nextui-org/react";
import flags from "@/src/utils/filterBarUtils/tagFlags";
import PricesRange from "@/src/utils/filterBarUtils/filterOptions";

const HotelFilterBar = ({
  setFilters,
  locations,
}: {
  setFilters: Function;
  locations: { country: string; cities: string[] }[];
}) => {
  const [countries, setCountries] = useState<Selection>(new Set([]));
  const [priceRange, setPriceRange] = useState<Selection>(new Set([]));

  useEffect(() => {
    setFilters({
      country: countries,
      priceRange,
    });
  }, [countries, priceRange]);

  return (
    <div className="sticky top-0 bg-transparentBg z-10">
      <nav className="h-20 w-full flex justify-center p-2 gap-2">
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
        <Select
          className="max-w-xs"
          label="Select price range"
          selectionMode="multiple"
          selectedKeys={priceRange}
          onSelectionChange={setPriceRange}
        >
          {PricesRange.map((price) => (
            <SelectItem
              key={`${price.min}-${price.max}`}
              textValue={
                price.min === 0
                  ? `<${price.max}`
                  : price.min > 0 && price.max < Infinity
                  ? `${price.min}-${price.max}`
                  : `>${price.min}`
              }
            >
              {price.min == 0 && `<${price.max}`}
              {price.min > 0 &&
                price.max < Infinity &&
                `${price.min}-${price.max}`}
              {price.max == Infinity && `>${price.min}`}
            </SelectItem>
          )).flat()}
        </Select>
      </nav>
    </div>
  );
};

export default HotelFilterBar;
