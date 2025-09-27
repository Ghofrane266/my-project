-- AlterTable
CREATE SEQUENCE "public".recipeingredient_id_seq;
ALTER TABLE "public"."RecipeIngredient" ALTER COLUMN "id" SET DEFAULT nextval('"public".recipeingredient_id_seq');
ALTER SEQUENCE "public".recipeingredient_id_seq OWNED BY "public"."RecipeIngredient"."id";
