import { IsArray, IsOptional } from "class-validator";

export class HotelFiltersDto {
    @IsArray()
    @IsOptional()
    countries?: string[];

    @IsArray()
    @IsOptional()
    cities?: string[];
}
