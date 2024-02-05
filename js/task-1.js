const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('ul > li');
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів у категорії ${categoryName}: ${categoryElements.length}`);
});

