import { Injectable } from '@nestjs/common';
import { CreateOrdersitemDto } from './dto/create-ordersitem.dto';
import { UpdateOrdersitemDto } from './dto/update-ordersitem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersitemsService {

  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateOrdersitemDto) {
    return 'This action adds a new ordersitem';
  }

  findAll() {
    return this.prisma.orderItem.findMany({});
  }

  findOne(id: number) {
    return this.prisma.orderItem.findUnique({where:{id}});
  }

  update(id: number, updateOrdersitemDto: UpdateOrdersitemDto) {
    return this.prisma.orderItem.update({where:{id},data:updateOrdersitemDto});
  }

  remove(id: number) {
    return this.prisma.orderItem.delete({where:{id}});
  }
}
