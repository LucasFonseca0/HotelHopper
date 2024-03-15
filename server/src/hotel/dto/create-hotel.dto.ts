import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


class RoomDto {
  @IsString()
  room_number: string;

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsArray()
  amenities?: string[]; 

  @IsNumber()
  capacity: number;
 @IsArray()
  imagesURI?:string[]

 @IsString()
  description?:string
}

export class CreateHotelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNumber()
  rating?: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RoomDto)
  rooms: RoomDto[];
}
