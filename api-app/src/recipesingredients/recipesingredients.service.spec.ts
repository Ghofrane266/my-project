import { Test, TestingModule } from '@nestjs/testing';
import { RecipesingredientsService } from './recipesingredients.service';

describe('RecipesingredientsService', () => {
  let service: RecipesingredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesingredientsService],
    }).compile();

    service = module.get<RecipesingredientsService>(RecipesingredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
