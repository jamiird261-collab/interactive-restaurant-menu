


````markdown
#  Interactive Restaurant Menu (Follow-Along Lab)

##  Project Overview

In this project, you will build an **interactive restaurant menu** using:

- HTML
- CSS
- JavaScript

This is a **step-by-step guided project**.

You are NOT expected to know everything yet.  
You will build this together, one small step at a time.

---

## What You Will Learn

By the end of this lab, you will understand how to:

- connect JavaScript to your webpage
- grab elements from your HTML
- respond to user clicks
- change what users see on the page
- build a real interactive experience

---

## How This Lab Works

You will NOT get all the code at once.

Instead, you will:

1. Write a little code
2. Test it
3. Understand it
4. Then move forward

---

# PART 1 — Set Up Your Files

Create these files:

```
index.html
style.css
script.js
```

---

# PART 2 — Build Your HTML

Paste this into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Restaurant Menu</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>Sunrise Bistro</h1>
  <h2 id="menu-title">Menu</h2>

  <button id="breakfast-btn">Breakfast</button>
  <button id="lunch-btn">Lunch</button>
  <button id="dinner-btn">Dinner</button>

  <div id="menu-display">
    <p>Select a menu</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

# PART 3 — Add Basic Styling

Paste this into `style.css`:

```css
body {
  font-family: Arial;
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}

#menu-display {
  margin-top: 20px;
  font-size: 18px;
}
```

---

# PART 4 — Connect JavaScript

Open `script.js` and add:

```javascript
console.log("JavaScript is connected!");
```

### Checkpoint

- Open your browser
- Right-click → Inspect → Console

You should see:

```
JavaScript is connected!
```

If you see this, your JavaScript is working.

---

# PART 5 — Grab Elements from the Page

Now we tell JavaScript to "grab" parts of our webpage.

Replace your code with this:

```javascript
// Grab each button
const breakfastButton = document.querySelector("#breakfast-btn");
const lunchButton = document.querySelector("#lunch-btn");
const dinnerButton = document.querySelector("#dinner-btn");

// Grab the title and display area
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");
```

### Translation

- "Go find the Breakfast button"
- "Go find the title"
- "Go find where menu items will go"

---

# PART 6 — Make ONE Button Work

We will start small.

Add this:

```javascript
breakfastButton.addEventListener("click", function () {
  menuTitle.textContent = "Breakfast Menu";
});
```

### Translation

- "When the Breakfast button is clicked..."
- "Change the title on the page"

---

### Checkpoint

Click the Breakfast button.

Did the title change?

If YES → you're doing real JavaScript now.

---

# PART 7 — Update the Menu Content

Now let's change the menu items too.

Update your code:

```javascript
breakfastButton.addEventListener("click", function () {
  menuTitle.textContent = "Breakfast Menu";
  menuDisplay.textContent = "Pancakes, Eggs, Bacon";
});
```

---

### Checkpoint

Click Breakfast again.

You should now see food appear.

---

# PART 8 — Add More Buttons

Now repeat the same idea.

Add this:

```javascript
lunchButton.addEventListener("click", function () {
  menuTitle.textContent = "Lunch Menu";
  menuDisplay.textContent = "Burger, Fries, Salad";
});

dinnerButton.addEventListener("click", function () {
  menuTitle.textContent = "Dinner Menu";
  menuDisplay.textContent = "Steak, Rice, Vegetables";
});
```

---

### What You Just Did

You built your first interactive app.

Every button:
- listens for a click
- changes the page

---

# 🚀 PART 9 — Make It Look Better (HTML inside JavaScript)

Right now your menu is plain text.

Let’s upgrade it.

Replace ONE button (breakfast) with this:

```javascript
breakfastButton.addEventListener("click", function () {
  menuTitle.textContent = "Breakfast Menu";

  menuDisplay.innerHTML = `
    <h3>Pancakes</h3>
    <p>Fluffy and delicious</p>

    <h3>Eggs & Bacon</h3>
    <p>Classic breakfast combo</p>
  `;
});
```

---

### Translation

Instead of plain text, we are now adding real HTML from JavaScript.

---

# PART 10 — Notice the Problem

Your code is starting to repeat.

Example:

- Breakfast code
- Lunch code
- Dinner code

Developers don’t like repeating code.

So we improve it.

---

# PART 11 — Create a Function

Add this at the top of your file:

```javascript
function updateMenu(title, items) {
  menuTitle.textContent = title;
  menuDisplay.innerHTML = items;
}
```

---

Now update ONE button like this:

```javascript
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
});
```

---

### Translation

- We created a reusable action
- Now we don’t repeat ourselves

---

# PART 12 — (Optional Advanced) Store Data in JavaScript

Now that you understand everything, we can make it cleaner.

Example:

```javascript
const breakfastItems = `
  <h3>Pancakes</h3>
  <p>Fluffy and delicious</p>
`;
```

Then use it:

```javascript
updateMenu("Breakfast Menu", breakfastItems);
```

---

This is how real apps separate data from display.

---

# FINAL GOAL CHECK

Your app should:

- change when buttons are clicked
- update title
- update menu items
- feel interactive

---

# CUSTOMIZE YOUR PROJECT

Now make it YOURS:

- change restaurant name
- add brunch, drinks, happy hour
- improve styling
- add more menu items with prices and descriptions
- change colors and layout

---

# REFLECTION QUESTIONS

1. What does `addEventListener()` do?
2. What does `.textContent` do?
3. What does `.innerHTML` do?
4. Why did we create a function?
5. What part made the most sense to you?

---

# BIG TAKEAWAY

You just learned this pattern:

1. Grab something  
2. Listen for an action  
3. Change the page  

That is the foundation of **ALL frontend frameworks (React, Angular, etc.)**

---

# FINAL CHALLENGE

Add at least 2 new menu categories:

- Brunch
- Drinks
- Happy Hour

Make them fully interactive using the same pattern.

---

## Reminder

You are not memorizing code.

You are learning how websites **respond to people**.
````

---

