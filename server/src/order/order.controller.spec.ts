import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';

const mockCurrentUser = () => ({
  _id: 'user_id',
  email: 'Tobias@gmail.com',
  name: 'Tobias Malaquias'
});

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;


  const orderEntityList: Order[] = [
    new Order({
      Date: [
        new Date("Fri Apr 19 2024 15:00:18 GMT+0100 (Horário de Verão da Europa Ocidental)"),
        new Date("Tue Apr 23 2024 15:00:18 GMT+0100 (Horário de Verão da Europa Ocidental)")
      ],
      hotel:"65f149586d00fb0836003eb2",
      room_number:"457"
    }),
    new Order({
      Date: [
        new Date("Fri Apr 15 2024 15:00:18 GMT+0100 (Horário de Verão da Europa Ocidental)"),
        new Date("Tue Apr 23 2024 15:00:18 GMT+0100 (Horário de Verão da Europa Ocidental)")
      ],
      hotel:"65f149586d00fb0836003eb2",
      room_number:"4557"
    }),
    new Order({
      Date: [
        new Date("Fri Apr 19 2024 15:00:18 GMT+0100 (Horário de Verão da Europa Ocidental)"),
        new Date("Tue Apr 29 2024 15:00:18 GMT+0100 (Horário de Verão da Europa Ocidental)")
      ],
      hotel:"65f149586d00fb0836003eb2",
      room_number:"5487"  
    }),
  ]; 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(orderEntityList),
          }
        },
        { provide: 'CurrentUser', useValue: mockCurrentUser() }
      ],
    }).compile();

    orderController = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(orderController).toBeDefined();
    expect(orderService).toBeDefined();
  });
});
