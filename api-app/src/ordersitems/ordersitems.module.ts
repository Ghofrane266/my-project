import { Module } from '@nestjs/common';
import { OrdersitemsService } from './ordersitems.service';
import { OrdersitemsController } from './ordersitems.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrdersitemsController],
  providers: [OrdersitemsService,PrismaService],
})
export class OrdersitemsModule {}
