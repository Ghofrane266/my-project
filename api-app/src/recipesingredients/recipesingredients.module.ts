import { Module } from '@nestjs/common';
import { RecipesingredientsService } from './recipesingredients.service';
import { RecipesingredientsController } from './recipesingredients.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RecipesingredientsController],
  providers: [RecipesingredientsService,PrismaService],
})
export class RecipesingredientsModule {}
