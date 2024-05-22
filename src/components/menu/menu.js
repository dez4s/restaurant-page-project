// import quinoaSalad from './imgs/quinoa-salad.jpg'
// import avocadoToast from './imgs/avocado-toast.png'
// import burger from './imgs/burger.jpg'
// import greekYogurt from './imgs/greek-yogurt-parfait.jpg'
// import grilledChicken from './imgs/grilled-chicken-breast.png'
// import berries from './imgs/mix-berries.jpg'
// import salmon from './imgs/salmon.jpg'
// import smoothie from './imgs/smoothie.jpg'
// import stuffedBell from './imgs/stuffed-bell-pepper.jpg'
// import tofuStir from './imgs/tofu-stir-fry.png'

import './menu.css'
// Using .json file to import data containing an array with all menu items
import menuItems from'./menu-items.json'

const preprocessMenuItems = async (items) => {
    const processedItems = await Promise.all(
      items.map(async (item) => {
        const imagePath = await import(`${item.image}`);
        return {
          ...item,
          image: imagePath.default
        };
      })
    );
    return processedItems;
  };

const createMenu = async () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    menuContainer.classList.add('container');

    const createTextElem = (parent, elemType, text, cssClass) => {
        const elem = document.createElement(elemType);
        elem.textContent = text;
        if (cssClass) elem.classList.add(cssClass);
        parent.appendChild(elem);
    };

    const createCard = (item) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = new Image();
        img.src = item.image;
        card.appendChild(img);

        createTextElem(card, 'h3', item.name);
        createTextElem(card, 'p', item.price, 'price');
        createTextElem(card, 'p', item.description);
        
        let ingredientList = 'Ingredients: ';
        item.ingredients.forEach((ingredient, index) => {
            if (index < item.ingredients.length - 1) {
                ingredientList += ingredient + ', '; 
            } else {
                ingredientList += ingredient;
            }
        });
        createTextElem(card, 'p', ingredientList, 'ingredients');

        return card;
    };

    const processedMenuItems = await preprocessMenuItems(menuItems);

    processedMenuItems.forEach(item => {
        console.log(createCard(item));
        menuContainer.appendChild(createCard(item)); 
    })

    return menuContainer;
}

export default await createMenu();

// Non .json file version
// function createMenu() {
//     const menuContainer = document.createElement('div');
//     menuContainer.id = 'menu-container';
//     menuContainer.classList.add('container');

//     const createCard = (imgFood, foodName, description, ingredients) => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         const imgElem = new Image();
//         imgElem.src = imgFood;
//         card.appendChild(imgElem);

//         const createTextElem = (elemType, text) => {
//             const elem = document.createElement(elemType);
//             elem.textContent = text;
//             return elem;
//         }

//         card.appendChild(createTextElem('h3', foodName));
//         card.appendChild(createTextElem('p', description));
//         card.appendChild(createTextElem('p', ingredients));
        
//         return card;
//     }

//     const appendCardToMenu = (card) => {
//         menuContainer.appendChild(card);
//     }

//     appendCardToMenu(createCard(quinoaSalad, 'Quinoa Salad', 'Description: A refreshing salad packed with protein and nutrients, featuring fluffy quinoa, crisp vegetables, and a zesty dressing.', 'Ingredients: Quinoa, mixed greens, cherry tomatoes, cucumber, red onion, bell pepper, lemon vinaigrette.'));

//     appendCardToMenu(createCard(grilledChicken, 'Grilled Chicken Breast', 'Description: Tender grilled chicken breast seasoned to perfection, served with a side of steamed vegetables.', 'Ingredients: Chicken breast, olive oil, garlic, lemon juice, salt, pepper, assorted vegetables (broccoli, carrots, cauliflower).'));

//     appendCardToMenu(createCard(burger, 'Quinoa and Black Bean Burger', 'Description: A delicious veggie burger made with wholesome ingredients like quinoa, black beans, and spices, served on a whole-grain bun.', 'Ingredients: Quinoa, black beans, onion, garlic, cumin, paprika, whole-grain bun, lettuce, tomato, avocado.'));

//     appendCardToMenu(createCard(greekYogurt, 'Greek Yogurt Parfait', 'Description: A delightful parfait made with creamy Greek yogurt, fresh berries, and crunchy granola layers.', 'Ingredients: Greek yogurt, mixed berries (strawberries, blueberries, raspberries), honey, granola.'));

//     appendCardToMenu(createCard(avocadoToast, 'Avocado Toast', 'Description: A trendy and nutritious dish featuring creamy avocado slices on top of toasted whole-grain bread.', 'Ingredients: Whole-grain bread, ripe avocado, cherry tomatoes, red pepper flakes, sea salt, black pepper.'));

//     appendCardToMenu(createCard(berries, 'Mixed Berry Salad', 'Description: A light and refreshing salad bursting with the sweetness of mixed berries, balanced with tangy vinaigrette.', 'Ingredients: Mixed greens, strawberries, blueberries, raspberries, goat cheese, balsamic vinaigrette.'));

//     appendCardToMenu(createCard(salmon, 'Salmon Fillet with Steamed Vegetables', 'Description: A heart-healthy dish featuring succulent salmon fillet paired with a colorful medley of steamed vegetables.', 'Ingredients: Salmon fillet, olive oil, lemon slices, salt, pepper, assorted vegetables (asparagus, zucchini, carrots).'));

//     appendCardToMenu(createCard(smoothie, 'Green Smoothie Bowl', 'Description: A refreshing and nutrient-packed smoothie bowl featuring vibrant green fruits and vegetables, topped with crunchy granola and fresh berries.', 'Ingredients: Spinach, banana, pineapple, avocado, almond milk, honey, granola, mixed berries.'));

//     appendCardToMenu(createCard(stuffedBell, 'Quinoa Stuffed Bell Peppers', 'Description: Colorful bell peppers stuffed with a savory mixture of quinoa, black beans, corn, and spices, baked to perfection.', 'Ingredients: Bell peppers, quinoa, black beans, corn, onion, garlic, cumin, chili powder, cilantro.'));

//     appendCardToMenu(createCard(tofuStir, 'Vegetable Stir-Fry with Tofu', 'Description: A refreshing and nutrient-packed smoothie bowl featuring vibrant green fruits and vegetables, topped with crunchy granola and fresh berries.', 'Ingredients: Spinach, banana, pineapple, avocado, almond milk, honey, granola, mixed berries.'));

//     return menuContainer;
// }

// export default createMenu()
