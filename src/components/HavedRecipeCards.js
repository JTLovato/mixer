import React from 'react';
import Data from '../Data'

function HavedRecipeCards(props) {

    let totalDrinks = Data.drinks

    let havedIngredients = props.selectedIngredients
    let newDrinkList = []
    let resultsList = []

    // console.log(totalDrinks)

    function putInNewList() {
        for (let p = 0; p < totalDrinks.length; p++ ) {
            newDrinkList.push(totalDrinks[p].ingredients)
        } 
    }

    putInNewList()

    console.log(newDrinkList)

    let checkRecipes = () => {
        const possibleDrinks = newDrinkList.filter(ingres => 
            ingres.every(ingre => havedIngredients.includes(ingre))
        );
        console.log(possibleDrinks)
        // console.log(totalDrinks[0].ingredients)

        for (let q = 0; q < totalDrinks.length; q++) {
            let duh = totalDrinks[q].ingredients
            if (possibleDrinks.includes(duh)) {
                console.log('YES YOU WHORE')
                resultsList.push(totalDrinks[q].name)
                console.log(resultsList)
            }
        }
    }
    


    return (
        <div>
            <input type="submit" value="Submit" onClick={checkRecipes}/>
            <div>
            Results: {resultsList}
            </div>
        </div>
    )
}

export default HavedRecipeCards;