import React from 'react'
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

function MatchedDrinkCard(props) {
    let matchedDrink = props.matchedDrink
    console.log(matchedDrink)
    let newDrinkIngredients = []
    let drinkData = props.matchedDrink

    // Function below lists the ingredients with a comma between each and a period at the end.
    let newDrink = drinkData['ingredients']
    for (let i = 0; i <= matchedDrink['ingredients'].length - 1; i++) {
        if (i !== newDrink.length - 1) {
            newDrinkIngredients.push(newDrink[i] + ", ")
        } else {
        newDrinkIngredients.push(newDrink[i] + ".")
    }
}
    // Truncates drink card so there's no overflow, shortening each description if needed with elipses.
    let truncated = () => {
        if (matchedDrink['description'].length > 100) {
            return matchedDrink['description'].substring(0, 100) + '...';
        } else {
            return matchedDrink['description']
        }
    }
    
    return (
        <Link to={`/drink/${matchedDrink['name']}`} state={{ from: matchedDrink }}>
            <div className="drink-card">
                <img src={`../img/${matchedDrink['image']}`} alt="" className="drink-card-image"></img>
                <h1>{matchedDrink['name']}</h1>
                <Ratings stars={matchedDrink['rating']} />
                <h5>{newDrinkIngredients}</h5>
                <h6>{truncated()}</h6>
            </div>
        </Link>
    )
}


export default MatchedDrinkCard
