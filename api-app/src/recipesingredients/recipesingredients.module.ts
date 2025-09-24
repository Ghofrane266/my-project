import { Module } from '@nestjs/common';
import { RecipesingredientsService } from './recipesingredients.service';
import { RecipesingredientsController } from './recipesingredients.controller';

@Module({
  controllers: [RecipesingredientsController],
  providers: [RecipesingredientsService],
})
export class RecipesingredientsModule {}
