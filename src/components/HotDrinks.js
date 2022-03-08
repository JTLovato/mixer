import React from 'react'
import Data from '../NewData'
import DrinkCard from './DrinkCard'

function HotDrinks() {

// console.log(Data.drinks[0])
// This creates first drink's data
    return (
        
        <div>
            <h1>Hottest Drinks Now</h1>
            <DrinkCard data={Data} />
            <DrinkCard data={Data} />
            <DrinkCard data={Data} />
        </div>
    )
}

export default HotDrinks
