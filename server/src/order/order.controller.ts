import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';


@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
async create(@Body() createOrderDto: CreateOrderDto, @CurrentUser() user: User) {
 
  return await this.orderService.create(createOrderDto, user._id);
}


  @Get()
async findAll(@CurrentUser() user: User) {
  return await this.orderService.findAll(user._id);
}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orderService.findOne(id);
  }
}
