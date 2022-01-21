import React from 'react'
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import Image from '../img/gimlet.jpg'

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
    let truncated = () => {
        if (newDrink['description'].length > 100) {
            return newDrink['description'].substring(0, 100) + '...';
        } else {
            return newDrink['description']
        }
    }
    

    return (
        <Link to="/drink" drink={drinkData}>
            <div className="drink-card">
                <img src={Image} alt="" className="drink-card-image"></img>
                <h1>{newDrink['name']}</h1>
                <Ratings stars={newDrink['rating']} />
                <h5>{newDrinkIngredients}</h5>
                <h6>{truncated()}</h6>
            </div>
        </Link>
    )

}

export default DrinkCard
