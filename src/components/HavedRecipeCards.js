import React from 'react';
import Data from '../Data'

function HavedRecipeCards(props) {

    let totalDrinks = Data.drinks

    let havedIngredients = props.selectedIngredients
    let newDrinkList = []
    let finalList =[]
    
    function putInNewList() {
        for (let p = 0; p < totalDrinks.length; p++ ){
            
            newDrinkList.push([totalDrinks[p].ingredients], [totalDrinks[p].id])
        }
    }

    putInNewList()
    console.log(newDrinkList)


    let checkRecipes = () => {
        const possibleDrinks = newDrinkList.filter(ingres => 
            ingres.every(ingre => havedIngredients.includes(ingre))
        );
        for ( let i= 0; i < possibleDrinks.length; i++) {
            finalList.push(possibleDrinks[i])
        }
        console.log(finalList)
        // const possibleDrinks = newDrinkList.filter(ingres => 
        //     ingres.every(ingre => havedIngredients.includes(ingre))
        // );
    }
    

    return (
        <div>
            <input type="submit" value="Submit" onClick={checkRecipes}/>
        </div>
    )
}

export default HavedRecipeCards;