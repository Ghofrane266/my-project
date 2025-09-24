import { Injectable } from '@nestjs/common';
import { CreateOrdersitemDto } from './dto/create-ordersitem.dto';
import { UpdateOrdersitemDto } from './dto/update-ordersitem.dto';

@Injectable()
export class OrdersitemsService {
  create(createOrdersitemDto: CreateOrdersitemDto) {
    return 'This action adds a new ordersitem';
  }

  findAll() {
    return `This action returns all ordersitems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersitem`;
  }

  update(id: number, updateOrdersitemDto: UpdateOrdersitemDto) {
    return `This action updates a #${id} ordersitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersitem`;
  }
}
