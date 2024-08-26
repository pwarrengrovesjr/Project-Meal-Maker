//Project: Meal Maker

var menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  addDishToCourse: function(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    }

    if (courseName === 'appetizer') {
      menu.courses.appetizers.push(dish);
    } else if (courseName === 'main') {
      menu.courses.mains.push(dish);
    } else {menu.courses.desserts.push(dish)}
  },

  getRandomDishFromCourse: function (courseName) {
    var dishes = [];
    
    if (courseName === 'appetizer') {
      dishes.push(menu.courses.appetizers);
    } else if (courseName === 'main') {
      dishes.push(menu.courses.mains);
    } else {dishes.push(menu.courses.desserts);}

    // console.log(dishes[0]);
    // console.log(dishes[0].length);
 
    var randomDish = Math.floor(Math.random() * dishes[0].length);

    // console.log(dishes[0][randomDish])
    return dishes[0][randomDish];
  },

  generateRandomMeal: function () {
    var appetizer = menu.getRandomDishFromCourse('appetizer')
    var main = menu.getRandomDishFromCourse('main')
    var dessert = menu.getRandomDishFromCourse('dessert')
    

    var totalPrice = appetizer.price + main.price + dessert.price;
    // console.log(totalPrice);

    return `Your Appetizer: ${appetizer.name} - $${appetizer.price}
Your Main Course: ${main.name} - $${main.price}
Your Dessert: ${dessert.name} - $${dessert.price}
Your Total: $${totalPrice}`;
  }
};

//appetizers
menu.addDishToCourse('appetizer', 'Mozzarella Sticks', 5);
menu.addDishToCourse('appetizer', 'Chicken Wings', 8);
menu.addDishToCourse('appetizer', 'Chips & Salsa', 3);
menu.addDishToCourse('appetizer', 'Onion Rings', 5);

//mains
menu.addDishToCourse('main', 'Ribeye Steak', 20);
menu.addDishToCourse('main', 'Cheeseburger', 15);
menu.addDishToCourse('main', 'Chicken Parmesan', 18);
menu.addDishToCourse('main', 'Chicken Strips', 10);

//desserts
menu.addDishToCourse('dessert', 'Chocolate Cake', 6);
menu.addDishToCourse('dessert', 'Apple Pie', 5);
menu.addDishToCourse('dessert', 'Beignets', 3);
menu.addDishToCourse('dessert', 'Cheesecake', 7);


// console.log(menu.courses);

menu.getRandomDishFromCourse('appetizer');
menu.getRandomDishFromCourse('main');
menu.getRandomDishFromCourse('dessert')

// console.log(menu.courses.price);

var meal = menu.generateRandomMeal();

console.log(meal);
