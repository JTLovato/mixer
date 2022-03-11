import React from 'react'
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import Image_Not_Found from '../img/drink_not_found.jpg'

function MatchedDrinkCard(props) {
    let newDrinkIngredients = []
    let drinkData = props.matchedDrink

    // Function below lists the ingredients with a comma between each and a period at the end.
    let newDrink = drinkData['ingredients']
    for (let i = 0; i <= drinkData['ingredients'].length - 1; i++) {
        if (i !== newDrink.length - 1) {
            newDrinkIngredients.push(newDrink[i] + ", ")
        } else {
        newDrinkIngredients.push(newDrink[i] + ".")
    }
}
    // Truncates drink card so there's no overflow, shortening each description if needed with elipses.
    let truncated = () => {
        if (drinkData['description'].length > 100) {
            return drinkData['description'].substring(0, 100) + '...';
        } else {
            return drinkData['description']
        }
    }
    
    return (
        <Link to={`/drink/${drinkData['name']}`} state={{ from: drinkData }}>
            <div className="drink-card">
                <img 
                    src = {`../img/${drinkData['image']}`} 
                    onError={(e) => {
                            e.target.onerror = null
                            e.target.src = Image_Not_Found
                        }}
                    alt="" className="drink-card-image"
                ></img>
                <h1>{drinkData['name']}</h1>
                <Ratings stars={drinkData['rating']} />
                <h5>{newDrinkIngredients}</h5>
                <h6>{truncated()}</h6>
            </div>
        </Link>
    )
}


export default MatchedDrinkCard
