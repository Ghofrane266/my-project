import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipesingredientDto } from './create-recipesingredient.dto';

export class UpdateRecipesingredientDto extends PartialType(CreateRecipesingredientDto) {}
