import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true})
  room_number: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Hotel' })
  hotel: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: string;
  @Prop({ required: true })
  Date: Date[];

}

export const OrderSchema = SchemaFactory.createForClass(Order);
