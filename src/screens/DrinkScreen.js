import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import DrinkNotes from '../components/DrinkNotes'
import FavoriteButtons from '../components/FavoritesButtons'
import IMadeIt from '../components/IMadeIt'
import IngredientsList from '../components/IngredientsList'
import NutritionFacts from '../components/NutritionFacts'
import Print from '../components/Print'
import Ratings from '../components/Ratings'
import Reviews from '../components/Reviews'
import Image_Not_Found from '../img/drink_not_found.jpg'


function DrinkScreen() {

    const location = useLocation()
    const { from } = location.state

    console.log(from['name']);

    return (
        <div>
            {from &&
                <div>
                    <img 
                        className="drinkCardImage" 
                        src={`../img/${from['image']}`} 
                        onError={(e) => {
                            e.target.onerror = null
                            e.target.src = Image_Not_Found
                        }} 
                    alt="" />
                    <h1 className="white-header">
                        {from['name']}
                    </h1>
                    <div>
                        <Ratings stars={from['rating']} />
                    </div>
                    <p className="description white-header">
                        {from['description']}
                    </p>
                    <FavoriteButtons id={from['id']}/>
                    <div className="ingredients-list">
                        <IngredientsList ingredients={from} />
                    </div>
                    <p className="directions white-header">
                        {from['directions']}
                    </p>
                    <div className="sub-cats">
                        <IMadeIt />
                        <Print />
                    </div>
                    {from.drinkNotes &&
                        <DrinkNotes />
                    }   
                    {from.nutritionFacts &&
                        <NutritionFacts />
                    }   
                    {from.reviews &&
                        <Reviews />
                    }
                </div>
            }
        </div>
    )
}

export default DrinkScreen
