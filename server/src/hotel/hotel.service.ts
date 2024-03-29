import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel, HotelDocument } from './entities/hotel.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';

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
        function secondFilterHotel() {
          hotels = hotels.map((hotel) => {
            hotel.rooms = hotel.rooms.filter((room) => {
              const roomPrice = room.price;
              const priceRanges = Array.isArray(priceRange) ? priceRange : [priceRange];
              return priceRanges.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return min <= roomPrice && roomPrice <= max;
              });
            });
            return hotel;
          });
        }

        secondFilterHotel();
      }

      console.log(hotels);
      return hotels;
    } catch (error) {
      throw new Error(`Failed to find hotels: ${error.message}`);
    }
  }


  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
