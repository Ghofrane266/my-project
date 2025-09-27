import { Injectable } from '@nestjs/common';
import { CreateRecipesingredientDto } from './dto/create-recipesingredient.dto';
import { UpdateRecipesingredientDto } from './dto/update-recipesingredient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesingredientsService {
    constructor(private readonly prisma: PrismaService) {}
  
  create(dto: CreateRecipesingredientDto) {
    return 'This action adds a new recipesingredient';
  }

  findAll() {
    return this.prisma.recipeIngredient.findMany({});
  }

  findOne(id: number) {
    return this.prisma.recipeIngredient.findUnique({ where: { id } });
  }

  update(id: number, updateRecipesingredientDto: UpdateRecipesingredientDto) {
    return this.prisma.recipeIngredient.update({ where: { id }, data: updateRecipesingredientDto });  }

  remove(id: number) {
    return this.prisma.recipeIngredient.delete({ where: { id } });  }
}
