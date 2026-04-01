# Interactive-Restaurant-Menu

# Suggested Repo Structure

```text
interactive-restaurant-menu/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# `README.md`

````markdown
# Interactive Restaurant Menu

## Project Overview

In this project, you will build an **interactive restaurant menu webpage** using:

- HTML
- CSS
- JavaScript

Your menu will include these categories:

- Breakfast
- Lunch
- Brunch
- Dinner
- Happy Hour
- Drinks

This project is designed as a **follow-along lab**. That means you are not expected to know how to do all of this yet. The goal is to learn how JavaScript connects to your webpage and makes it interactive.

You will build the project step by step, and then you can go back later to customize it with your own restaurant theme, menu items, styling, and extra features.

---

## Learning Goals

By the end of this project, you should be able to:

- connect a JavaScript file to an HTML page
- use `document.querySelector()` and `document.querySelectorAll()`
- use `addEventListener()` to respond to button clicks
- update the page with JavaScript
- display different menu sections dynamically
- organize content using arrays and objects
- build a webpage that changes based on user interaction

---

## Final Product Goal

When your project is done, a user should be able to:

- open your restaurant menu webpage
- click a category button like **Breakfast** or **Dinner**
- see the correct menu items appear on the page
- switch between categories without refreshing the page

---

## Project Rules

Your project must include:

- a restaurant name
- a short welcome message or slogan
- buttons for all menu categories
- a display section where menu items appear
- JavaScript interactivity
- clean, readable styling

---

# Part 1: Set Up Your Files

Create the following files:

- `index.html`
- `style.css`
- `script.js`

Make sure all file names are spelled exactly correctly.

---

# Part 2: Build the HTML Structure

Inside `index.html`, create the basic structure of the webpage.

Your page should include:

- a header
- a section with category buttons
- a section where menu items will appear
- a script tag connected to `script.js`

## Follow-Along Starter Code

Paste this into your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Restaurant Menu</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="hero">
    <h1>Sunrise Bistro</h1>
    <p>Fresh food for every part of your day</p>
  </header>

  <section class="menu-controls">
    <button class="menu-btn" data-category="breakfast">Breakfast</button>
    <button class="menu-btn" data-category="lunch">Lunch</button>
    <button class="menu-btn" data-category="brunch">Brunch</button>
    <button class="menu-btn" data-category="dinner">Dinner</button>
    <button class="menu-btn" data-category="happyHour">Happy Hour</button>
    <button class="menu-btn" data-category="drinks">Drinks</button>
  </section>

  <main class="menu-section">
    <h2 id="menu-title">Menu</h2>
    <div id="menu-display">
      <p>Select a category to view menu items.</p>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

## Stop and Check

Before moving on, make sure:

- your buttons are showing
- your page has a title and description
- your script tag is at the bottom of the `body`

---

# Part 3: Style the Page with CSS

Now make your page look more like a real restaurant menu.

Paste this into `style.css`:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #fdf8f3;
  color: #2d2d2d;
  line-height: 1.6;
  padding: 20px;
}

.hero {
  text-align: center;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.1rem;
  color: #666;
}

.menu-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.menu-btn {
  padding: 12px 18px;
  border: none;
  background-color: #2d6a4f;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.menu-btn:hover {
  background-color: #1b4332;
}

.menu-btn.active {
  background-color: #d97706;
}

.menu-section {
  max-width: 900px;
  margin: 0 auto;
}

#menu-title {
  text-align: center;
  margin-bottom: 20px;
}

#menu-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.menu-item {
  background-color: white;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.menu-item h3 {
  margin-bottom: 8px;
}

.menu-item p {
  margin-bottom: 10px;
  color: #555;
}

.price {
  font-weight: bold;
  color: #d97706;
}
```

## Stop and Check

Before moving on, make sure:

- your page looks styled
- your buttons have color
- your layout is readable

---

# Part 4: Connect JavaScript to Your Webpage

This is the most important step.

You are going to prove that your JavaScript file is connected correctly.

Open `script.js` and add this:

```javascript
console.log("JavaScript is connected!");
```

Now open your webpage in the browser.

Then:

1. Right-click the page
2. Click **Inspect**
3. Open the **Console**

If you see:

```javascript
JavaScript is connected!
```

then your JavaScript file is linked correctly.

## Why This Matters

This tells us:

- the browser found your `script.js` file
- your HTML and JavaScript are connected
- you are ready to start making the page interactive

---

# Part 5: Select Elements from the Page

Now that JavaScript is connected, you need to grab the parts of the page you want to control.

Replace your `console.log()` with this:

```javascript
const buttons = document.querySelectorAll(".menu-btn");
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");

console.log(buttons);
console.log(menuTitle);
console.log(menuDisplay);
```

## What This Does

- `querySelectorAll(".menu-btn")` selects all the menu buttons
- `querySelector("#menu-title")` selects the menu heading
- `querySelector("#menu-display")` selects the area where menu items will appear

## Stop and Check

Open the console again.

You should see:

- a list of buttons
- the heading element
- the menu display div

If you do, your JavaScript is successfully selecting elements from the DOM.

---

# Part 6: Store Menu Data in JavaScript

Now you will store your menu categories and items in JavaScript instead of hardcoding them into the HTML.

Add this below your element selectors:

```javascript
const menuData = {
  breakfast: [
    {
      name: "Pancake Stack",
      description: "Fluffy pancakes served with maple syrup",
      price: "$8"
    },
    {
      name: "Egg & Cheese Sandwich",
      description: "Scrambled eggs and cheese on a toasted roll",
      price: "$7"
    },
    {
      name: "Fruit Bowl",
      description: "Fresh seasonal fruit served chilled",
      price: "$6"
    }
  ],
  lunch: [
    {
      name: "Classic Burger",
      description: "Beef burger with fries",
      price: "$12"
    },
    {
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken, romaine, and Caesar dressing",
      price: "$11"
    },
    {
      name: "Tomato Soup",
      description: "Warm tomato soup with herbs",
      price: "$7"
    }
  ],
  brunch: [
    {
      name: "Chicken & Waffles",
      description: "Crispy chicken with Belgian waffles",
      price: "$14"
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread topped with avocado and eggs",
      price: "$10"
    },
    {
      name: "Brunch Mimosa",
      description: "Sparkling brunch favorite",
      price: "$9"
    }
  ],
  dinner: [
    {
      name: "Grilled Salmon",
      description: "Salmon served with rice and vegetables",
      price: "$18"
    },
    {
      name: "Steak Pasta",
      description: "Sliced steak over creamy pasta",
      price: "$19"
    },
    {
      name: "Veggie Bowl",
      description: "Roasted vegetables over quinoa",
      price: "$15"
    }
  ],
  happyHour: [
    {
      name: "Mini Sliders",
      description: "Three mini burgers",
      price: "$6"
    },
    {
      name: "Loaded Fries",
      description: "Fries topped with cheese and bacon",
      price: "$7"
    },
    {
      name: "Mozzarella Sticks",
      description: "Crispy sticks with marinara sauce",
      price: "$6"
    }
  ],
  drinks: [
    {
      name: "Fresh Lemonade",
      description: "Cold lemonade made fresh daily",
      price: "$4"
    },
    {
      name: "Iced Coffee",
      description: "Cold brew coffee over ice",
      price: "$5"
    },
    {
      name: "Berry Smoothie",
      description: "Mixed berries blended with yogurt",
      price: "$6"
    }
  ]
};
```

## Why This Matters

This is important because now JavaScript controls the content.

Instead of writing a separate section for each category in HTML, you can:

- store the data once
- display it when needed
- switch categories dynamically

That is how many real websites work.

---

# Part 7: Build a Function That Displays Menu Items

Now create a function that shows menu items on the page.

Add this below your `menuData` object:

```javascript
function displayMenu(category) {
  menuDisplay.innerHTML = "";
  menuTitle.textContent = category;

  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    `;

    menuDisplay.appendChild(menuItem);
  });
}
```

## What This Function Does

When called, this function:

1. clears the old menu items
2. changes the menu heading
3. loops through the selected category
4. creates a card for each menu item
5. adds those cards to the page

---

# Part 8: Test One Category First

Before making every button work, test the function manually.

Add this at the bottom of your file:

```javascript
displayMenu("breakfast");
```

Refresh the page.

You should now see your breakfast items appear automatically.

## Stop and Check

If breakfast items show up on the page, that means:

- your function works
- your data is connected
- your DOM update is working

That is a huge step.

---

# Part 9: Make the Buttons Interactive

Now it is time to make the buttons respond when a user clicks them.

Add this below `displayMenu("breakfast");`

```javascript
buttons.forEach(button => {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});
```

## What This Does

For each button:

- listens for a click
- reads the `data-category` value from the button
- passes that value into `displayMenu()`

That means:

- Breakfast button shows breakfast
- Lunch button shows lunch
- Dinner button shows dinner
- and so on

---

# Part 10: Add Active Button Styling

Now make the currently selected button stand out.

Update your event listener code to this:

```javascript
buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});
```

Then add this line right after `displayMenu("breakfast");`

```javascript
buttons[0].classList.add("active");
```

## Why This Matters

This improves the user experience because the visitor can clearly see which menu section is selected.

---

# Part 11: Clean Up the Title

Right now the title may show category names like `happyHour`.

Let's improve that.

Replace your `displayMenu()` function with this version:

```javascript
function displayMenu(category) {
  menuDisplay.innerHTML = "";

  const categoryTitles = {
    breakfast: "Breakfast Menu",
    lunch: "Lunch Menu",
    brunch: "Brunch Menu",
    dinner: "Dinner Menu",
    happyHour: "Happy Hour Menu",
    drinks: "Drinks Menu"
  };

  menuTitle.textContent = categoryTitles[category];

  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    `;

    menuDisplay.appendChild(menuItem);
  });
}
```

Now your headings will look more polished.

---

# Part 12: Final Code Check

At this point, your project should do all of the following:

- show breakfast by default when the page loads
- allow users to click category buttons
- update the menu items on the page
- highlight the active category
- keep the page clean and organized

If all of that works, your interactive menu is complete.

---

# Stretch Challenges

When you finish the follow-along version, choose at least one way to customize it.

## Option 1: Create Your Own Restaurant Theme
Change:

- restaurant name
- colors
- font choices
- menu items
- slogan

## Option 2: Add Images
Add an image for each menu item or a hero image for the restaurant.

## Option 3: Add a Special Badge
Add labels like:

- Chef's Choice
- Spicy
- Vegetarian
- Popular

## Option 4: Add a Weekend Message
Make your brunch section display a message like:

> Available Saturdays and Sundays only

## Option 5: Add More Categories
Examples:

- Desserts
- Kids Menu
- Seasonal Specials

---

# Helpful Reminders

## If your JavaScript is not working:
Check these things:

- Is the file named `script.js`?
- Is your script tag written exactly like this?

```html
<script src="script.js"></script>
```

- Is the script tag at the bottom of the `body`?
- Did you spell your class names and IDs correctly?
- Did you check the browser console for errors?

## If your buttons do nothing:
Check these things:

- Do your buttons have the class `menu-btn`?
- Do your buttons have `data-category` values?
- Do the category names match the keys inside `menuData` exactly?

Example:

```html
<button class="menu-btn" data-category="breakfast">Breakfast</button>
```

and in JavaScript:

```javascript
menuData.breakfast
```

These must match.

---

# Submission Checklist

Before submitting, make sure your project includes:

- [ ] `index.html`
- [ ] `style.css`
- [ ] `script.js`
- [ ] all 6 menu categories
- [ ] working buttons
- [ ] menu items displayed dynamically
- [ ] active button styling
- [ ] clean design
- [ ] at least 3 items per category

---

# Reflection Questions

Answer these after completing the project:

1. How did JavaScript make your webpage interactive?
2. What did `querySelectorAll()` help you do?
3. What is the purpose of `addEventListener()`?
4. Why is storing menu data in objects and arrays useful?
5. What was the hardest part of the project?
6. What would you add next if this were a real restaurant website?

---

# Challenge for Later

After finishing the guided version, go back and make the project your own.

Ideas:

- build a luxury restaurant theme
- build a breakfast café theme
- build a sports bar menu
- build a dessert lounge
- build a food truck menu

The goal is to start with the guided version, understand how it works, and then customize it with confidence.
````

---

# `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Restaurant Menu</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="hero">
    <h1>Sunrise Bistro</h1>
    <p>Fresh food for every part of your day</p>
  </header>

  <section class="menu-controls">
    <button class="menu-btn" data-category="breakfast">Breakfast</button>
    <button class="menu-btn" data-category="lunch">Lunch</button>
    <button class="menu-btn" data-category="brunch">Brunch</button>
    <button class="menu-btn" data-category="dinner">Dinner</button>
    <button class="menu-btn" data-category="happyHour">Happy Hour</button>
    <button class="menu-btn" data-category="drinks">Drinks</button>
  </section>

  <main class="menu-section">
    <h2 id="menu-title">Menu</h2>
    <div id="menu-display">
      <p>Select a category to view menu items.</p>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

# `style.css`

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #fdf8f3;
  color: #2d2d2d;
  line-height: 1.6;
  padding: 20px;
}

.hero {
  text-align: center;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.1rem;
  color: #666;
}

.menu-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.menu-btn {
  padding: 12px 18px;
  border: none;
  background-color: #2d6a4f;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.menu-btn:hover {
  background-color: #1b4332;
}

.menu-btn.active {
  background-color: #d97706;
}

.menu-section {
  max-width: 900px;
  margin: 0 auto;
}

#menu-title {
  text-align: center;
  margin-bottom: 20px;
}

#menu-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.menu-item {
  background-color: white;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.menu-item h3 {
  margin-bottom: 8px;
}

.menu-item p {
  margin-bottom: 10px;
  color: #555;
}

.price {
  font-weight: bold;
  color: #d97706;
}
```

---

# `script.js`

```javascript
const buttons = document.querySelectorAll(".menu-btn");
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");

const menuData = {
  breakfast: [
    {
      name: "Pancake Stack",
      description: "Fluffy pancakes served with maple syrup",
      price: "$8"
    },
    {
      name: "Egg & Cheese Sandwich",
      description: "Scrambled eggs and cheese on a toasted roll",
      price: "$7"
    },
    {
      name: "Fruit Bowl",
      description: "Fresh seasonal fruit served chilled",
      price: "$6"
    }
  ],
  lunch: [
    {
      name: "Classic Burger",
      description: "Beef burger with fries",
      price: "$12"
    },
    {
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken, romaine, and Caesar dressing",
      price: "$11"
    },
    {
      name: "Tomato Soup",
      description: "Warm tomato soup with herbs",
      price: "$7"
    }
  ],
  brunch: [
    {
      name: "Chicken & Waffles",
      description: "Crispy chicken with Belgian waffles",
      price: "$14"
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread topped with avocado and eggs",
      price: "$10"
    },
    {
      name: "Brunch Mimosa",
      description: "Sparkling brunch favorite",
      price: "$9"
    }
  ],
  dinner: [
    {
      name: "Grilled Salmon",
      description: "Salmon served with rice and vegetables",
      price: "$18"
    },
    {
      name: "Steak Pasta",
      description: "Sliced steak over creamy pasta",
      price: "$19"
    },
    {
      name: "Veggie Bowl",
      description: "Roasted vegetables over quinoa",
      price: "$15"
    }
  ],
  happyHour: [
    {
      name: "Mini Sliders",
      description: "Three mini burgers",
      price: "$6"
    },
    {
      name: "Loaded Fries",
      description: "Fries topped with cheese and bacon",
      price: "$7"
    },
    {
      name: "Mozzarella Sticks",
      description: "Crispy sticks with marinara sauce",
      price: "$6"
    }
  ],
  drinks: [
    {
      name: "Fresh Lemonade",
      description: "Cold lemonade made fresh daily",
      price: "$4"
    },
    {
      name: "Iced Coffee",
      description: "Cold brew coffee over ice",
      price: "$5"
    },
    {
      name: "Berry Smoothie",
      description: "Mixed berries blended with yogurt",
      price: "$6"
    }
  ]
};

function displayMenu(category) {
  menuDisplay.innerHTML = "";

  const categoryTitles = {
    breakfast: "Breakfast Menu",
    lunch: "Lunch Menu",
    brunch: "Brunch Menu",
    dinner: "Dinner Menu",
    happyHour: "Happy Hour Menu",
    drinks: "Drinks Menu"
  };

  menuTitle.textContent = categoryTitles[category];

  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    `;

    menuDisplay.appendChild(menuItem);
  });
}

displayMenu("breakfast");
buttons[0].classList.add("active");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});
```

---

# Optional Instructor Notes

For your class flow, I would teach this repo in this order:

**Day 1 / Live Follow-Along**

* build HTML together
* connect CSS
* connect JavaScript with `console.log()`
* explain `querySelector()` and `querySelectorAll()`

**Day 2 / Guided Interactivity**

* create `menuData`
* build `displayMenu()`
* test one category
* connect buttons with `addEventListener()`

**Day 3 / Customization**

* students re-theme the restaurant
* add custom categories or stretch features
* polish styling and layout

---

# Optional Add-On Files

If you want, I can next turn this into a more complete **GitHub classroom-style repo package** with:

* a polished instructor rubric
* starter code version
* completed solution version
* 90-minute lab format
* stretch goals section
* troubleshooting guide for students who get stuck
