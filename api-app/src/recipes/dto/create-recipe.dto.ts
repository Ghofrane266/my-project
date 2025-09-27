import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateRecipeDto {

@ApiProperty()
name: string

@ApiProperty()
@IsNotEmpty()
description?: string

@ApiProperty()
@IsNotEmpty()
image?: string

@ApiProperty()
createdBy: number

@ApiProperty()
userId:number







}
