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
    
    

    console.log(filters)
    const query: any = {};
  
    if (country && country.length > 0) {
      query.country = { $in: country };
    }
  
    if (priceRange && priceRange.length > 0) {
      const priceRangeQueries = priceRange.map(range => {

        const [min, max] = range.split('-');
        if (max === 'Infinity') {
          return { price: { $gte: parseInt(min) } }; // Greater than or equal to min price
        } else {
          return { price: { $gte: parseInt(min), $lte: parseInt(max) } }; // Price within range
        }
      });
  

      query.$and = [{ $or: priceRangeQueries }];
    }
   
   
    return await this.hotelModel.find(query);
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
