import Picture from "./food.jpg";

function menu() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuImages = document.createElement("div");
  menuImages.classList.add("menu-images");
  const foodPicture = new Image();
  foodPicture.src = Picture;
  menuImages.appendChild(foodPicture);

  const categories = [
    {
      name: "Beverages",
      items: ["Coffee", "Tea", "Lattes", "Smoothies"],
    },
    {
      name: "Light Bites",
      items: ["Avocado Toast", "Quinoa Salad", "Fruit Parfait", "Scones"],
    },
    {
      name: "Sweet Treats",
      items: ["Cookies", "Muffins", "Cake", "Fruit Tart"],
    },
  ];

  for (const category of categories) {
    const categoryDiv = document.createElement("div");
    const categoryName = document.createElement("h3");
    categoryName.textContent = category.name;
    const itemList = document.createElement("ul");
    for (const item of category.items) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      itemList.appendChild(listItem);
    }

    categoryDiv.appendChild(categoryName);
    categoryDiv.appendChild(itemList);
    menu.appendChild(categoryDiv);
    container.appendChild(menu);
    container.prepend(menuImages);
  }

}

export default menu;
