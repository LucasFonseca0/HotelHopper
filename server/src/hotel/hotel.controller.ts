import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { HotelFiltersDto } from './dto/hotel-filters.dto';
import { ObjectId } from 'mongoose';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @IsPublic()
  @Get()
  findAll(@Query() filters: any) {
    return this.hotelService.findAll(filters);
  }

  @IsPublic()
  @Get(':hotelID')
  findOneHotelByID(@Param('hotelID') id: string): Promise<Hotel> {
    return this.hotelService.findOneHotelByID(id);
  }
  @IsPublic()
  @Get(':hotelID/:RoomNumber')
  findOneRoomByID(
    @Param('hotelID') hotelID: string,
    @Param('RoomNumber') roomNumber: string,
  ): Promise<Room> {
    return this.hotelService.findOneRoomByID(hotelID, roomNumber);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(+id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(+id);
  }
}
