const itemsOfCategoriesRef = document.querySelectorAll(".item");
console.log("Number of categories:", itemsOfCategoriesRef.length);

itemsOfCategoriesRef.forEach(function (item) {
  console.log("Category:", item.firstElementChild.textContent);
  const categoriesOfItemRef = item.querySelectorAll("ul li");
  console.log("Elements:", categoriesOfItemRef.length);
});
