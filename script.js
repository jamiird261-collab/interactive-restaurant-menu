function updateMenu(title, items) {
  menuTitle.textContent = title;
  menuDisplay.innerHTML = items;
}
console.log("JavaScript is connected!");
//Button//
const breakfastButton = document.querySelector("#breakfast-btn");
const lunchButton = document.querySelector("#lunch-btn");
const dinnerButton = document.querySelector("#dinner-btn");
//Menu//
const breakfastMenu = document.querySelector("#breakfast-menu");
const lunchMenu = document.querySelector("#lunch-menu");
const dinnerMenu = document.querySelector("#dinner-menu");
//Event Listeners//
breakfastButton.addEventListener("click", () => {
  breakfastMenu.style.display = "block";
  lunchMenu.style.display = "none";
  dinnerMenu.style.display = "none";
});
lunchButton.addEventListener("click", () => {
  breakfastMenu.style.display = "none";
  lunchMenu.style.display = "block";
  dinnerMenu.style.display = "none";
});lunchButton.addEventListener("click", function () {
  menuTitle.textContent = "Lunch Menu";
  menuDisplay.textContent = "Burger, Fries, Salad";
});
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");
dinnerButton.addEventListener("click", () => {
  breakfastMenu.style.display = "none";
  lunchMenu.style.display = "none";
  dinnerMenu.style.display = "block";
});dinnerButton.addEventListener("click", function () {
  menuTitle.textContent = "Dinner Menu";
  menuDisplay.textContent = "Steak, Rice, Vegetables";
});
breakfastButton.addEventListener("click", function () {
  updateMenu(
    "Breakfast Menu",
    `
    <h3>Pancakes</h3>
    <p>Fluffy and delicious</p>

    <h3>Eggs & Bacon</h3>
    <p>Classic breakfast combo</p>
    `
  );
});updateMenu("Breakfast Menu", breakfastItems);

lunchButton.addEventListener("click", function () {
  menuTitle.textContent = "Lunch Menu";
  menuDisplay.textContent = "Burger, Fries, Salad";
});
dinnerButton.addEventListener("click", function () {
  menuTitle.textContent = "Dinner Menu";
  menuDisplay.textContent = "Steak, Rice, Vegetables";
});const drinksButton = document.querySelector("#drinks-btn");