import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateProductDto {

@ApiProperty()
name:string;
@ApiProperty()
description?:string;
@ApiProperty()
@IsNumber()
price:number;
@ApiProperty()
image?:string;
@ApiProperty()
categoryId:number;







}
