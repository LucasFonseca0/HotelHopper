import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './entities/order.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto, userId: string): Promise<Order> {
    try {
      const newOrder = new this.orderModel({
        ...createOrderDto,
        user: userId,
      });
      return await newOrder.save();
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  }
  
  async findAll(userId: string): Promise<Order[]> {
    try {
      const orders = await this.orderModel.find({ user: userId }).populate('user').populate('hotel').exec();
      if (!orders) {
        throw new NotFoundException('Orders not found');
      }
      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  }
  
  async findOne(id: string): Promise<Order> {
    try {
      const order = await this.orderModel.findById(id).populate('user').populate('hotel').exec();
      if (!order) {
        throw new NotFoundException(`Order with ID ${id} not found`);
      }
      return order;
    } catch (error) {
      console.error("Error fetching order:", error);
      throw error;
    }
  }
}
