import {  IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Order } from '../entities/order.entity';



export class CreateOrderDto extends Order {
  @IsNotEmpty()
  @IsString()
  hotel: string;

  @IsNotEmpty()
  @IsString()
  room_number: string;

  @IsNotEmpty()
  @IsArray()
  Date:Date[]
}
