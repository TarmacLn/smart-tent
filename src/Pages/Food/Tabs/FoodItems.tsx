import { MealEnum } from "../../../stores/types";

export const foodItems = [
    {
        name: "Burger",
        description: "Grilled beef patty with lettuce, tomato, cheese and house sauce on a toasted bun.",
        price: 11.99,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Apple Pie",
        description: "Warm apple pie with a flaky crust and cinnamon sugar, served with a dollop of cream.",
        price: 6.49,
        meals: [MealEnum.Dessert],
        vegetarian: true,
    },
    {
        name: "Baguette",
        description: "Crisp, freshly baked baguette — great as a side or for making sandwiches.",
        price: 3.99,
        meals: [MealEnum.Breakfast, MealEnum.Lunch],
        vegetarian: true,
    },
    {
        name: "Burrito",
        description: "Flour tortilla stuffed with rice, beans, cheese and your choice of seasoned meat or veggies.",
        price: 10.99,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Cheesecake",
        description: "Creamy baked cheesecake with a buttery biscuit base and berry compote.",
        price: 7.49,
        meals: [MealEnum.Dessert],
        vegetarian: true,
    },
    {
        name: "Chocolate Cake",
        description: "Decadent chocolate layer cake with rich chocolate frosting.",
        price: 6.99,
        meals: [MealEnum.Dessert],
        vegetarian: true,
    },
    {
        name: "Egg Salad",
        description: "Classic egg salad with mayo, chives and a touch of mustard on fresh bread.",
        price: 8.49,
        meals: [MealEnum.Breakfast, MealEnum.Lunch],
        vegetarian: true,
    },
    {
        name: "Fries",
        description: "Crispy golden fries seasoned with sea salt — perfect as a side.",
        price: 4.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: true,
    },
    {
        name: "Hot Dog",
        description: "Grilled frankfurter in a soft roll with ketchup, mustard and onions.",
        price: 7.99,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Ice Cream",
        description: "Two scoops of seasonal ice cream — choose from vanilla, chocolate or berry.",
        price: 4.99,
        meals: [MealEnum.Dessert],
        vegetarian: true,
    },
    {
        name: "Meatballs",
        description: "Savory meatballs in a rich tomato sauce served over a bed of pasta or bread.",
        price: 13.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Pudding",
        description: "Tarmac's favourite dessert: silky smooth pudding topped with caramel — a comforting sweet treat.",
        price: 5.49,
        meals: [MealEnum.Dessert],
        vegetarian: true,
    },
    {
        name: "Sandwich",
        description: "Toasted sandwich with choice of fillings, fresh greens and house mayo.",
        price: 9.99,
        meals: [MealEnum.Breakfast, MealEnum.Lunch],
        vegetarian: false,
    },
    {
        name: "Steak",
        description: "Hearty grilled steak served with seasonal sides.",
        price: 16.99,
        meals: [MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Pancakes",
        description: "Fluffy pancakes stacked with syrup and butter, served with fresh fruit.",
        price: 8.99,
        meals: [MealEnum.Breakfast],
        vegetarian: true,
    },
    {
        name: "Curry",
        description: "Aromatic curry with spices, vegetables and your choice of protein, served with rice.",
        price: 12.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Water",
        description: "Bottled still water to keep you hydrated.",
        price: 1.50,
        meals: [MealEnum.Drink],
        vegetarian: true,
    },
    {
        name: "Soda",
        description: "Refreshing carbonated soft drink.",
        price: 2.00,
        meals: [MealEnum.Drink],
        vegetarian: true,
    },
    {
        name: "Orange Juice",
        description: "Freshly squeezed orange juice, served chilled.",
        price: 2.75,
        meals: [MealEnum.Drink, MealEnum.Breakfast],
        vegetarian: true,
    },
    {
        name: "Coca Cola",
        description: "Classic Coca‑Cola can.",
        price: 2.00,
        meals: [MealEnum.Drink],
        vegetarian: true,
    },
    {
        name: "Wine Red",
        description: "Glass of red wine from the local selection.",
        price: 5.50,
        meals: [MealEnum.Dinner, MealEnum.Drink],
        vegetarian: true,
    },
    {
        name: "Wine White",
        description: "Glass of white wine from the local selection.",
        price: 5.50,
        meals: [MealEnum.Dinner, MealEnum.Drink],
        vegetarian: true,
    },
    {
        name: "Milk",
        description: "Cold milk, perfect with pancakes or as a drink.",
        price: 1.80,
        meals: [MealEnum.Breakfast, MealEnum.Drink],
        vegetarian: true,
    },
    {
        name: "Chips",
        description: "Crispy salted chips — great as a snack or side.",
        price: 2.50,
        meals: [MealEnum.Snack],
        vegetarian: true,
    },
    {
        name: "Snack",
        description: "Mixed snack pack — nuts, crisps and dried fruit.",
        price: 3.25,
        meals: [MealEnum.Snack],
        vegetarian: true,
    },
];

// convert a food name like "Apple Pie" -> "ApplePie", "Chocolate Cake" -> "ChocolateCake"
export const handleFoodName = (name: string) => {
    return (name || '')
        .replace(/[^a-zA-Z0-9 ]+/g, ' ')
        .trim()
        .split(/\s+/)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
};