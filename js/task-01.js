const listCategories = document.querySelector("ul#categories");

console.log(`Number of categories: ${listCategories.children.length}`);

Array.from(listCategories.children).forEach((item) =>
  console.log(`
Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`)
);
