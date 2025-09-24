import { Module } from '@nestjs/common';
import { OrdersitemsService } from './ordersitems.service';
import { OrdersitemsController } from './ordersitems.controller';

@Module({
  controllers: [OrdersitemsController],
  providers: [OrdersitemsService],
})
export class OrdersitemsModule {}
