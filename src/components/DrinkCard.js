import React from 'react'

function DrinkCard(props) {
    let newDrinkIngredients = []

    let drinkData = props.data.drinks

    let drinkLength = drinkData.length

    let randomDrink = Math.floor(Math.random() * drinkLength);

    let newDrink = drinkData[randomDrink]
    for (let i = 0; i <= newDrink['ingredients'].length - 1; i++) {
        if (i != newDrink['ingredients'].length - 1) {
            newDrinkIngredients.push(newDrink['ingredients'][i] + ", ")
        } else {
        newDrinkIngredients.push(newDrink['ingredients'][i] + ".")
    }
}
    

    return (
        <div className="drink-card">
            <h1>{newDrink['name']}</h1>
            <div>
                <h2>{newDrink['rating']}</h2>
                <h2>{newDrinkIngredients}</h2>
                <h3>{newDrink['description']}</h3>
                <h3>{newDrink['directions']}</h3>
            </div>
        </div>
    )

}

export default DrinkCard
