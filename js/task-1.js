const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
