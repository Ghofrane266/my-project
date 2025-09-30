import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { CategoriesModule } from './categories/categories.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersitemsModule } from './ordersitems/ordersitems.module';
import { RecipesingredientsModule } from './recipesingredients/recipesingredients.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, UsersModule, RecipesModule, CategoriesModule, IngredientsModule, OrdersModule, OrdersitemsModule, RecipesingredientsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
