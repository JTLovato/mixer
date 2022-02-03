import React from 'react';
import Data from '../Data'

function HavedRecipeCards(props) {

    let totalDrinks = Data.drinks

    let havedIngredients = props.selectedIngredients
    let newDrinkList = []
    let finalList =[]

    console.log(totalDrinks)

    function putInNewList() {
        for (let p = 0; p < totalDrinks.length; p++ ) {
            newDrinkList.push(totalDrinks[p].ingredients)
        } 
    }

    putInNewList()

    let checkRecipes = () => {
        const possibleDrinks = newDrinkList.filter(ingres => 
            ingres.every(ingre => havedIngredients.includes(ingre))
        );
        for ( let i= 0; i < possibleDrinks.length; i++) {
            finalList.push(possibleDrinks[i])
        }
        console.log(finalList[0])
        // console.log(totalDrinks[0].ingredients)

        for (let q = 0; q < totalDrinks.length; q++) {
            if (finalList[0] == totalDrinks[q].ingredients) {
                console.log("YAY")
                console.log(totalDrinks[q].name)
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