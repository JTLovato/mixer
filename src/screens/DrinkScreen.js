import React from 'react'
import { useLocation } from 'react-router-dom'
import DrinkNotes from '../components/DrinkNotes'
import IMadeIt from '../components/IMadeIt'
import IngredientsList from '../components/IngredientsList'
import NutritionFacts from '../components/NutritionFacts'
import Print from '../components/Print'
import Ratings from '../components/Ratings'
import Reviews from '../components/Reviews'

function DrinkScreen() {

    const location = useLocation()
    const { from } = location.state

    // console.log(from['name']

    return (
        <div>
            {from &&
                <div>
                    <h1>
                        {from['name']}
                    </h1>
                    <div>
                        <Ratings stars={from['rating']} />
                    </div>
                    <p className="description">
                        {from['description']}
                    </p>
                    <div className="ingredients-list">
                        <IngredientsList ingredients={from} />
                    </div>
                    <p className="directions">
                        {from['directions']}
                    </p>
                    <div className="sub-cats">
                        <IMadeIt />
                        <Print />
                    </div>
                    {from.drinkNotes &&
                        <DrinkNotes />
                    }   
                    <NutritionFacts />
                    {from.reviews &&
                        <Reviews />
                    }
                </div>
            }
        </div>
    )
}

export default DrinkScreen
