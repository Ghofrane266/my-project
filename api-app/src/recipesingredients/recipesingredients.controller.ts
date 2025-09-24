import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesingredientsService } from './recipesingredients.service';
import { CreateRecipesingredientDto } from './dto/create-recipesingredient.dto';
import { UpdateRecipesingredientDto } from './dto/update-recipesingredient.dto';

@Controller('recipesingredients')
export class RecipesingredientsController {
  constructor(private readonly recipesingredientsService: RecipesingredientsService) {}

  @Post()
  create(@Body() createRecipesingredientDto: CreateRecipesingredientDto) {
    return this.recipesingredientsService.create(createRecipesingredientDto);
  }

  @Get()
  findAll() {
    return this.recipesingredientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesingredientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipesingredientDto: UpdateRecipesingredientDto) {
    return this.recipesingredientsService.update(+id, updateRecipesingredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesingredientsService.remove(+id);
  }
}
