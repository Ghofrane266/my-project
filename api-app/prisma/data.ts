 export const products = [
  {
    name: "Soupe de légumes",
    description: "Soupe saine et délicieuse avec légumes frais",
    price: 5.5,
    image: "soupe-legumes.jpg",
    categoryId: 1
  },
  {
    name: "Salade César",
    description: "Salade fraîche avec poulet grillé et parmesan",
    price: 7.0,
    image: "salade-cesar.jpg",
    categoryId: 2
  },
  {
    name: "Steak frites",
    description: "Steak tendre avec frites croustillantes",
    price: 12.5,
    image: "steak-frites.jpg",
    categoryId: 3
  },
  {
    name: "Pizza Margherita",
    description: "Pizza classique avec mozzarella et basilic",
    price: 10.0,
    image: "pizza-margherita.jpg",
    categoryId: 3
  },
  {
    name: "Tarte au citron",
    description: "Tarte sucrée avec crème citronnée",
    price: 4.5,
    image: "tarte-citron.jpg",
    categoryId: 4
  },
  {
    name: "Brownie au chocolat",
    description: "Brownie fondant avec pépites de chocolat",
    price: 3.5,
    image: "brownie.jpg",
    categoryId: 4
  },
  {
    name: "Jus d'orange frais",
    description: "Jus naturel pressé à froid",
    price: 2.5,
    image: "jus-orange.jpg",
    categoryId: 5
  },
  {
    name: "Smoothie aux fruits rouges",
    description: "Smoothie vitaminé avec fraises, framboises et myrtilles",
    price: 3.0,
    image: "smoothie-fruits.jpg",
    categoryId: 5
  },
  {
    name: "Poulet rôti",
    description: "Poulet rôti au four avec herbes et épices",
    price: 11.0,
    image: "poulet-roti.jpg",
    categoryId: 3
  },
  {
    name: "Quiche aux légumes",
    description: "Quiche savoureuse avec légumes de saison",
    price: 6.0,
    image: "quiche-legumes.jpg",
    categoryId: 3
  }
];




 export const categories = [
  { name: "Soupe" },
  { name: "Salade" },
  { name: "Plat principal" },
  { name: "Dessert" },
  { name: "Boisson" }
];


 export const ingredients = [
  { name: "Carotte", type: "Légume" },
  { name: "Pommes de terre", type: "Légume" },
  { name: "Poulet", type: "Viande" },
  { name: "Lait", type: "Produit laitier" },
  { name: "Œuf", type: "Produit animal" },
  { name: "Farine", type: "Céréale" },
  { name: "Sucre", type: "Édulcorant" },
  { name: "Chocolat", type: "Dessert" },
  { name: "Tomate", type: "Légume" },
  { name: "Basilic", type: "Herbe" }
];

export const recipes = [
  {
    name: "Soupe de légumes",
    description: "Soupe saine et délicieuse avec légumes frais",
    image: "soupe-legumes.jpg",
    createdBy: 1, // userId qui a créé la recette
    ingredients: [
      { ingredientId: 1, quantity: 2, unit: "pcs" }, // Carotte
      { ingredientId: 2, quantity: 3, unit: "pcs" }, // Pommes de terre
      { ingredientId: 10, quantity: 5, unit: "feuilles" } // Basilic
    ]
  },
  {
    name: "Poulet rôti aux herbes",
    description: "Poulet rôti avec herbes et épices",
    image: "poulet-roti.jpg",
    createdBy: 1,
    ingredients: [
      { ingredientId: 3, quantity: 1, unit: "kg" }, // Poulet
      { ingredientId: 10, quantity: 5, unit: "feuilles" } // Basilic
    ]
  },
  {
    name: "Brownie au chocolat",
    description: "Brownie fondant avec pépites de chocolat",
    image: "brownie.jpg",
    createdBy: 1,
    ingredients: [
      { ingredientId: 4, quantity: 100, unit: "ml" }, // Lait
      { ingredientId: 6, quantity: 150, unit: "g" }, // Farine
      { ingredientId: 7, quantity: 100, unit: "g" }, // Sucre
      { ingredientId: 8, quantity: 200, unit: "g" }  // Chocolat
    ]
  },
  {
    name: "Salade César",
    description: "Salade fraîche avec poulet grillé et parmesan",
    image: "salade-cesar.jpg",
    createdBy: 2,
    ingredients: [
      { ingredientId: 3, quantity: 200, unit: "g" }, // Poulet
      { ingredientId: 9, quantity: 2, unit: "pcs" }   // Tomate
    ]
  }
];
