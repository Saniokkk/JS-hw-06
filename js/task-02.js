const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("ul#ingredients");

// function createItems(arr) {
//   const arrOfItems = arr.reduce((acc, item) => {
//     const elementLi = document.createElement("li");
//     elementLi.textContent = item;
//     elementLi.classList.add("item");
//     acc.push(elementLi);
//     return acc;
//   }, []);

//   listIngredients.append(arrOfItems);
// }

function createItems(arr) {
  const fragment = document.createDocumentFragment();

  arr.map((item) => {
    const elementLi = document.createElement("li");
    elementLi.textContent = item;
    elementLi.classList.add("item");
    fragment.appendChild(elementLi)
  });

  listIngredients.append(fragment);
}



createItems(ingredients);
