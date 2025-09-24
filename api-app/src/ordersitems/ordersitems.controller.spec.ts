import { Test, TestingModule } from '@nestjs/testing';
import { OrdersitemsController } from './ordersitems.controller';
import { OrdersitemsService } from './ordersitems.service';

describe('OrdersitemsController', () => {
  let controller: OrdersitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersitemsController],
      providers: [OrdersitemsService],
    }).compile();

    controller = module.get<OrdersitemsController>(OrdersitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
