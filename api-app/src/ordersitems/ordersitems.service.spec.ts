import { Test, TestingModule } from '@nestjs/testing';
import { OrdersitemsService } from './ordersitems.service';

describe('OrdersitemsService', () => {
  let service: OrdersitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersitemsService],
    }).compile();

    service = module.get<OrdersitemsService>(OrdersitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
