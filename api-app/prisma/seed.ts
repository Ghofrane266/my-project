import { PrismaClient } from '@prisma/client';
import {
  categoriesData,
  ingredientsData,
  productsData,
  recipeIngredientsData,
  recipesData,
} from './data';

const prisma = new PrismaClient();

async function main() {
    
  console.log('🌱 Seeding database...');


  await prisma.user.create({
  data: { name: "Admin", email: "admin@test.com", password: "hashedpwd", role: "ADMIN" }
});
const categories = await prisma.category.createMany({
    data: categoriesData,
  });

  const products = await prisma.product.createMany({
    data: productsData,
  });

 
  const recipes = await prisma.recipe.createMany({
    data: recipesData,
  });

 
  const ingredients = await prisma.ingredient.createMany({
    data: ingredientsData,
  });

  const recipeIngredient = await prisma.recipeIngredient.createMany({
    data: recipeIngredientsData,
  });
  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
