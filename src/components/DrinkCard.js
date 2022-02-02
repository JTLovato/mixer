import React from 'react'
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

function DrinkCard(props) {
    let newDrinkIngredients = []
    let drinkData = props.data.drinks
    // console.log(drinkData)

    let drinkLength = drinkData.length
    let randomDrink = Math.floor(Math.random() * drinkLength);

    // Function below lists the ingredients with a comma between each and a period at the end.
    let newDrink = drinkData[randomDrink]
    for (let i = 0; i <= newDrink['ingredients'].length - 1; i++) {
        if (i !== newDrink['ingredients'].length - 1) {
            newDrinkIngredients.push(newDrink['ingredients'][i] + ", ")
        } else {
        newDrinkIngredients.push(newDrink['ingredients'][i] + ".")
    }
}
    // Truncates drink card so there's no overflow, shortening each description if needed with elipses.
    let truncated = () => {
        if (newDrink['description'].length > 100) {
            return newDrink['description'].substring(0, 100) + '...';
        } else {
            return newDrink['description']
        }
    }
    

    return (
        <Link to={`/drink/${newDrink['name']}`} state={{ from: newDrink }}>
            <div className="drink-card">
                <img src={`../img/${newDrink['image']}`} alt="" className="drink-card-image"></img>
                <h1>{newDrink['name']}</h1>
                <Ratings stars={newDrink['rating']} />
                <h5>{newDrinkIngredients}</h5>
                <h6>{truncated()}</h6>
            </div>
        </Link>
    )

}

export default DrinkCard
