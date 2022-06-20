const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const makeIngredientItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add("item");
    return ingredientItem;
  });
};

const ingredientItems = makeIngredientItems(ingredients);

ingredientsListRef.append(...ingredientItems);
