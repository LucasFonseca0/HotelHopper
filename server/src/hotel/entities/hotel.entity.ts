import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';


export type HotelDocument = Hotel & Document;

interface rooms {
    room_number:string
    type:string
    price:number
    amenities : []
    capacity: number
}

@Schema()
export class Hotel {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  city: string;

  @Prop({  required:true })
  country: string;

  @Prop({  required:false })
  rating:number
  @Prop({  required:true }) 
  rooms :rooms[]
  @Prop({  required:true })
  user : ObjectId 
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);

 