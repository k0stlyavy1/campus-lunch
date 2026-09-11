const mondayMeals = [
    {
        name: "Breakfast: Avocado Toast & Egg",
        description: "Toasted sourdough bread with smashed avocado, poached egg, and a side of cherry tomatoes.",
        price: 8500,
        isVegetarian: true
    },
    {
        name: "Lunch: Grilled Chicken Salad",
        description: "Mixed greens, grilled chicken breast, cucumbers, and a light vinaigrette dressing.",
        price: 11000,
        isVegetarian: false
    },
    {
        name: "Dinner: Mushroom Risotto",
        description: "Creamy arborio rice cooked with wild mushrooms, garlic, parmesan, and vegetable broth.",
        price: 13500,
        isVegetarian: true
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    mondayMeals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'meal-card';

        const badgeClass = meal.isVegetarian ? 'veg' : 'non-veg';
        const badgeText = meal.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian';

        card.innerHTML = `
            <div class="meal-header">
                <span class="meal-name">${meal.name}</span>
                <span class="badge ${badgeClass}">${badgeText}</span>
            </div>
            <p class="meal-description">${meal.description}</p>
            <div class="meal-price">${meal.price.toLocaleString()} KRW</div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderMenu);