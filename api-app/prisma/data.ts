export const productsData = [
  {
    name: 'Soupe de légumes',
    description: 'Une soupe légère et saine',
    price: 8.5,
    categoryId: 1,
  },
  {
    name: 'Couscous royal',
    description: 'Plat principal traditionnel',
    price: 20,
    categoryId: 3,
  },
  {
    name: 'Tiramisu',
    description: 'Dessert italien',
    price: 12,
    categoryId: 2,
  },
  {
    name: 'Jus d’orange',
    description: 'Boisson fraîche',
    price: 5,
    categoryId: 4,
  },
];

export const categoriesData = [
  { id: 1, name: 'Soupe' },
  { id: 2, name: 'Dessert' },
  { id: 3, name: 'Plat principal' },
  { id: 4, name: 'Boisson' },
];

export const ingredientsData = [
  { name: 'Tomate', type: 'Légume' },
  { name: 'Carotte', type: 'Légume' },
  { name: 'Poulet', type: 'Viande' },
  { name: 'Farine', type: 'Céréale' },
  { name: 'Sucre', type: 'Édulcorant' },
];

export const recipesData = [
  {
    name: 'Soupe de légumes',
    description: 'Recette saine et délicieuse',
    image: 'soupe.jpg',
    userId: 1, // doit exister
    createdBy: 1,
  },
  {
    name: 'Couscous royal',
    description: 'Un classique tunisien',
    image: 'couscous.jpg',
    userId: 1,
    createdBy: 1,
  },
  
];

export const recipeIngredientsData = [
  { recipeId: 1, ingredientId: 1, quantity: 2, unit: 'pièces' }, // 2 tomates
  { recipeId: 1, ingredientId: 2, quantity: 3, unit: 'pièces' }, // 3 carottes
  { recipeId: 2, ingredientId: 3, quantity: 1, unit: 'kg' }, // 1kg de poulet
];
