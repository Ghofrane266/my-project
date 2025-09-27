import {  ApiProperty} from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateRecipesingredientDto {

  @ApiProperty()
  @IsNumber()
  quantity?: number;

  @ApiProperty()
  unit?: string;
  @ApiProperty()
  recipeId: number;
  @ApiProperty()
  ingredientId: number;
}
