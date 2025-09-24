import { Injectable } from '@nestjs/common';
import { CreateRecipesingredientDto } from './dto/create-recipesingredient.dto';
import { UpdateRecipesingredientDto } from './dto/update-recipesingredient.dto';

@Injectable()
export class RecipesingredientsService {
  create(createRecipesingredientDto: CreateRecipesingredientDto) {
    return 'This action adds a new recipesingredient';
  }

  findAll() {
    return `This action returns all recipesingredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipesingredient`;
  }

  update(id: number, updateRecipesingredientDto: UpdateRecipesingredientDto) {
    return `This action updates a #${id} recipesingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipesingredient`;
  }
}
