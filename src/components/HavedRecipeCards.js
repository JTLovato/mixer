import React from 'react';
import Data from '../Data'

function HavedRecipeCards(props) {

    // console.log(Data.drinks[0])
    let totalDrinks = Data.drinks
    // console.log(totalDrinks)
    let havedIngredients = props.selectedIngredients

    
    // Any ingredients Recipe
    let checkRecipes = () => {
        if (havedIngredients.length > 0) {
            for (let i = 0; i < totalDrinks.length; i++ ) {

                for (let p = 0; p <= havedIngredients.length; p++) {

                    let drinkIng = totalDrinks[i].ingredients
                    for (let o = 0; o < drinkIng.length; o ++) {

                        if (havedIngredients[p] == drinkIng[o]) {
                        // console.log(totalDrinks[i])

                        }
                    }
                }
            }
        }
    }

    return (
        <div>
            <input type="submit" value="Submit" onClick={checkRecipes}/>
        </div>
    )
}

export default HavedRecipeCards;
