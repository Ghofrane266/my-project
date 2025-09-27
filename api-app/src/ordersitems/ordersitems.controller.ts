import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersitemsService } from './ordersitems.service';
import { CreateOrdersitemDto } from './dto/create-ordersitem.dto';
import { UpdateOrdersitemDto } from './dto/update-ordersitem.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('ORDERS_ITEMS')
@ApiSecurity('apiKey')
@Controller('ordersitems')
export class OrdersitemsController {
  constructor(private readonly ordersitemsService: OrdersitemsService) {}

  @Post()
  create(@Body() dto: CreateOrdersitemDto) {
    return this.ordersitemsService.create(dto);
  }

  @Get()
  findAll() {
    return this.ordersitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersitemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersitemDto: UpdateOrdersitemDto) {
    return this.ordersitemsService.update(+id, updateOrdersitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersitemsService.remove(+id);
  }
}
