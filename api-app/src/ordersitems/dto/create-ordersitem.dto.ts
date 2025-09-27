import { ApiProperty } from "@nestjs/swagger";

export class CreateOrdersitemDto {
@ApiProperty()
quantity:number;
@ApiProperty()
productId:number;
@ApiProperty()
orderId:number;




}
