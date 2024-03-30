import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel, HotelDocument } from './entities/hotel.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose,{ Model, ObjectId } from 'mongoose';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
    return 'This action adds a new hotel';
  }

  async findAll(filters: HotelFilters) {
    const { country, priceRange } = filters;
    const query: any = {};

    if (country && country.length > 0) {
      query.country = { $in: Array.isArray(country) ? country : [country] };
    }

    if (priceRange && priceRange.length > 0) {
      const priceRanges = Array.isArray(priceRange) ? priceRange : [priceRange];
      const priceRangeQueries = priceRanges.map((range) => {
        const [min, max] = range.split('-');
        if (max === 'Infinity') {
          return { 'rooms.price': { $gte: parseInt(min) } };
        }
        return { 'rooms.price': { $gte: parseInt(min), $lte: parseInt(max) } };
      });

      query.$or = priceRangeQueries;
    }

    try {
      let hotels = await this.hotelModel.find(query);

      if (priceRange && priceRange.length > 0) {
        this.filterHotelsByPriceRange(hotels, priceRange);
      }

      return hotels;
    } catch (error) {
      throw new Error(`Failed to find hotels: ${error.message}`);
    }
  }

  private filterHotelsByPriceRange(hotels: Hotel[], priceRange: string[]) {
    return hotels.map((hotel) => {
      hotel.rooms = hotel.rooms.filter((room) => {
        const roomPrice = room.price;
        const priceRanges = Array.isArray(priceRange)
          ? priceRange
          : [priceRange];
        return priceRanges.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return min <= roomPrice && roomPrice <= max;
        });
      });
      return hotel;
    });
  }

  async findOneHotelByID(id: string) {
    try {
      const hotel = await this.hotelModel.findOne({ _id: new mongoose.Types.ObjectId(id) });
      return hotel;
    } catch (error) {
      throw new Error(`Failed to find hotel: ${error.message}`);
    }
  }
  async findOneRoomByID(hotelID: string, roomNumber: string) {
    try {
      const hotel = await this.findOneHotelByID(hotelID);
  
      const room = hotel.rooms.find(room => room.room_number === roomNumber);
  
      if (!room) {
        throw new Error(`Failed to find room: there's no room with room number ${roomNumber}`);
      }
  
      return room;
    } catch (error) {
      throw new Error(`Failed to find room: ${error.message}`);
    }
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
