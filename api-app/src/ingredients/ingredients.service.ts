import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientsService {
    constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIngredientDto) {
    return 'This action adds a new ingredient';
  }

  findAll() {
    return this.prisma.ingredient.findMany({});
  }

  findOne(id: number) {
    return this.prisma.ingredient.findUnique({where:{id}});
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.prisma.ingredient.update({where:{id},data:updateIngredientDto});
  }

  remove(id: number) {
    return this.prisma.ingredient.delete({where:{id}});
  }
}
