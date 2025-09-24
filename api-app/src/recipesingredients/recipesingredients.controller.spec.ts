import { Test, TestingModule } from '@nestjs/testing';
import { RecipesingredientsController } from './recipesingredients.controller';
import { RecipesingredientsService } from './recipesingredients.service';

describe('RecipesingredientsController', () => {
  let controller: RecipesingredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesingredientsController],
      providers: [RecipesingredientsService],
    }).compile();

    controller = module.get<RecipesingredientsController>(RecipesingredientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
