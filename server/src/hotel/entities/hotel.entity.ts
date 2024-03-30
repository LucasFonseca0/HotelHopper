import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type HotelDocument = Hotel & Document;



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
  rooms :Room[]
  @Prop({  required:true })
  user : string 
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);

 