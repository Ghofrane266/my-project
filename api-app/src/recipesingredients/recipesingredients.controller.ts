import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesingredientsService } from './recipesingredients.service';
import { CreateRecipesingredientDto } from './dto/create-recipesingredient.dto';
import { UpdateRecipesingredientDto } from './dto/update-recipesingredient.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('RECIPES_INGREDIENTS')
@ApiSecurity('apiKey')
@Controller('recipesingredients')
export class RecipesingredientsController {
  constructor(private readonly recipesingredientsService: RecipesingredientsService) {}

  @Post()
  create(@Body() dto: CreateRecipesingredientDto) {
    return this.recipesingredientsService.create(dto);
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
